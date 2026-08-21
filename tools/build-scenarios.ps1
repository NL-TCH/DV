<#
    Generates data/scenarios.js from the research workbook.

    The app is a zero-build static site, so it cannot read .xlsx at
    runtime. This script is the bridge: run it whenever the workbook
    changes and it regenerates the scenario data file. Nothing is
    hand-converted, so growing the sheet from 100 to 3400 analysed
    rows costs one command.

    Usage (from the repo root):
        powershell -ExecutionPolicy Bypass -File tools\build-scenarios.ps1
        powershell -ExecutionPolicy Bypass -File tools\build-scenarios.ps1 -Workbook "C:\path\to\book.xlsx"

    Only rows that carry a DV-Type are exported; unanalysed rows are
    skipped. An .xlsx is a zip of XML, so no Excel install is needed.
#>
[CmdletBinding()]
param(
  [string]$Workbook = "$env:USERPROFILE\Downloads\08-21-26_cyber_breaches.xlsx",
  [string]$AnalysisSheet = 'Prompt Output - BreachDatabase',
  [string]$GlobalSheet = 'Global',
  [string]$OutFile
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem
Add-Type -AssemblyName System.Xml.Linq

if (-not $OutFile) {
  $OutFile = Join-Path (Split-Path -Parent $PSScriptRoot) 'data\scenarios.js'
}

# ---------------------------------------------------------------- xlsx reading

function Read-XlsxSheet {
  param([string]$Path, [string]$SheetName)

  $zip = [System.IO.Compression.ZipFile]::OpenRead($Path)
  try {
    function Get-Entry([string]$name) {
      $e = $zip.Entries | Where-Object { $_.FullName -eq $name }
      if (-not $e) { return $null }
      $sr = New-Object System.IO.StreamReader($e.Open())
      try { $sr.ReadToEnd() } finally { $sr.Dispose() }
    }

    $ns = 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'
    $nsr = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'

    $wb = [System.Xml.Linq.XDocument]::Parse((Get-Entry 'xl/workbook.xml'))
    $sheetEl = $wb.Descendants([System.Xml.Linq.XName]::Get('sheet', $ns)) |
      Where-Object { $_.Attribute('name').Value -eq $SheetName } | Select-Object -First 1
    if (-not $sheetEl) { throw "Sheet '$SheetName' not found in $Path" }
    $rid = $sheetEl.Attribute([System.Xml.Linq.XName]::Get('id', $nsr)).Value

    $rels = [System.Xml.Linq.XDocument]::Parse((Get-Entry 'xl/_rels/workbook.xml.rels'))
    $target = ($rels.Descendants() |
      Where-Object { $_.Attribute('Id') -and $_.Attribute('Id').Value -eq $rid } |
      Select-Object -First 1).Attribute('Target').Value
    # Targets come either relative ("worksheets/sheet2.xml") or absolute ("/xl/worksheets/sheet2.xml").
    $target = $target.TrimStart('/')
    if ($target -notlike 'xl/*') { $target = 'xl/' + $target }

    $shared = @()
    $ssXml = Get-Entry 'xl/sharedStrings.xml'
    if ($ssXml) {
      $ss = [System.Xml.Linq.XDocument]::Parse($ssXml)
      $shared = @($ss.Root.Elements([System.Xml.Linq.XName]::Get('si', $ns)) | ForEach-Object {
        -join ($_.Descendants([System.Xml.Linq.XName]::Get('t', $ns)) | ForEach-Object { $_.Value })
      })
    }

    $sheet = [System.Xml.Linq.XDocument]::Parse((Get-Entry $target))
    foreach ($row in $sheet.Descendants([System.Xml.Linq.XName]::Get('row', $ns))) {
      $cells = @{}
      foreach ($c in $row.Elements([System.Xml.Linq.XName]::Get('c', $ns))) {
        $col = ($c.Attribute('r').Value -replace '\d','')
        $t = if ($c.Attribute('t')) { $c.Attribute('t').Value } else { '' }
        $val = $null
        if ($t -eq 'inlineStr') {
          $val = -join ($c.Descendants([System.Xml.Linq.XName]::Get('t', $ns)) | ForEach-Object { $_.Value })
        } else {
          $v = $c.Element([System.Xml.Linq.XName]::Get('v', $ns))
          if ($v) { $val = if ($t -eq 's') { $shared[[int]$v.Value] } else { $v.Value } }
        }
        $cells[$col] = $val
      }
      [pscustomobject]@{ RowNumber = [int]$row.Attribute('r').Value; Cells = $cells }
    }
  } finally { $zip.Dispose() }
}

# ---------------------------------------------------------------- mappings

# Must stay in step with the "markers" block in data/content.js. Any
# label in the sheet that is missing here is reported at the end
# rather than silently dropped, so taxonomy drift is loud.
$MarkerCodes = [ordered]@{
  'Governance / ownership isolation'            = 'M1'
  'Generic knowing-doing execution gap'         = 'M2'
  'Expertise / capability constraint'           = 'M3'
  'Asset / dependency visibility gap'           = 'M4'
  'Patch / configuration latency'               = 'M5'
  'Identity / access-control exposure'          = 'M6'
  'Third-party / supply-chain trust boundary'   = 'M7'
  'Segmentation / containment weakness'         = 'M8'
  'Resilience / recovery path dependency'       = 'M9'
  'Data governance / disclosure gap'            = 'M10'
  'Monitoring / detection / validation gap'     = 'M11'
  'Egress monitoring gap'                       = 'M12'
  'Breach notification latency'                 = 'M13'
  'Recurring unremediated incident pattern'     = 'M14'
  'Vulnerability disclosure handling gap'       = 'M15'
  'Management tooling weaponisation'            = 'M16'
  'Change / migration window exposure'          = 'M17'
}

# The workbook codes three DV types plus Unknown; Expertise to
# Leadership is the framework's theoretical fourth cell and is not
# part of the coding scheme, but is mapped here so it works if added.
$DvKeys = @{
  'Strategy to Leadership'  = 'leadership'
  'Strategy to Execution'   = 'execution'
  'Expertise to Execution'  = 'expertise-execution'
  'Expertise to Leadership' = 'expertise-leadership'
}

$ConfidenceLabels = @{
  '5' = 'Very high — incident-specific mechanism confirmed by a primary source'
  '4' = 'High — confirmed by strong secondary reporting'
  '3' = 'Moderate — inferred from a documented group-wide or sector pattern'
  '2' = 'Low — rests on a sector-wide pattern or an unverified claim'
  '1' = 'Indicative — case is atypical for the framework'
}

function Clean([object]$v) {
  if ($null -eq $v) { return '' }
  ([string]$v).Trim()
}

# Multi-value cells are semicolon-separated. Emitted as arrays rather
# than a joined string so the app can filter on them: some values
# legitimately contain a comma ("Korea, Republic of").
function Split-Multi([object]$v) {
  @((Clean $v) -split ';' |
    ForEach-Object { $_.Trim() } |
    Where-Object { $_ } |
    Select-Object -Unique)
}

# Sector names in the workbook carry a long parenthetical definition
# ("Corporate Targets (corporate targets only coded if ...)"), which is
# unusable as a filter label.
function Trim-Parenthetical([string]$v) {
  ($v -replace '\s*\(.*\)\s*$', '').Trim()
}

<#
    JSON is written by hand rather than with ConvertTo-Json, which
    collapses a one-element array into a bare scalar - that would
    silently turn "countries": ["Russia"] into "countries": "Russia"
    and break every consumer that iterates it. JavaScriptSerializer
    cannot walk PowerShell's ordered dictionaries, so neither is
    usable here.
#>
function ConvertTo-JsonString([string]$s) {
  $sb = New-Object System.Text.StringBuilder
  [void]$sb.Append('"')
  foreach ($ch in $s.ToCharArray()) {
    $code = [int]$ch
    if     ($ch -eq '"')  { [void]$sb.Append('\"') }
    elseif ($ch -eq '\')  { [void]$sb.Append('\\') }
    elseif ($ch -eq "`n") { [void]$sb.Append('\n') }
    elseif ($ch -eq "`r") { [void]$sb.Append('\r') }
    elseif ($ch -eq "`t") { [void]$sb.Append('\t') }
    elseif ($ch -eq '<')  { [void]$sb.Append('<') }  # never let "</script>" close the tag
    elseif ($code -lt 32) { [void]$sb.Append(('\u{0:x4}' -f $code)) }
    else                  { [void]$sb.Append($ch) }
  }
  [void]$sb.Append('"')
  $sb.ToString()
}

function ConvertTo-JsonText($Value, [int]$Depth = 0) {
  $pad = '  ' * $Depth
  $padIn = '  ' * ($Depth + 1)

  if ($null -eq $Value) { return 'null' }
  if ($Value -is [bool]) { if ($Value) { return 'true' } else { return 'false' } }
  if ($Value -is [int] -or $Value -is [long] -or $Value -is [double] -or $Value -is [decimal]) {
    return ([string]$Value)
  }
  # Strings are IEnumerable too, so they must be handled before collections.
  if ($Value -is [string]) { return ConvertTo-JsonString $Value }

  if ($Value -is [System.Collections.IDictionary]) {
    $parts = @()
    foreach ($key in $Value.Keys) {
      $parts += $padIn + (ConvertTo-JsonString ([string]$key)) + ': ' + (ConvertTo-JsonText $Value[$key] ($Depth + 1))
    }
    if ($parts.Count -eq 0) { return '{}' }
    return "{`n" + ($parts -join ",`n") + "`n$pad}"
  }

  if ($Value -is [System.Collections.IEnumerable]) {
    $parts = @()
    foreach ($item in $Value) { $parts += $padIn + (ConvertTo-JsonText $item ($Depth + 1)) }
    if ($parts.Count -eq 0) { return '[]' }
    return "[`n" + ($parts -join ",`n") + "`n$pad]"
  }

  ConvertTo-JsonString ([string]$Value)
}

# ---------------------------------------------------------------- read

Write-Host "Reading '$AnalysisSheet' ..."
$analysis = @(Read-XlsxSheet -Path $Workbook -SheetName $AnalysisSheet)
# Row 1 is the header, row 2 the prompt specification; data starts at row 3.
$dataRows = $analysis | Where-Object { $_.RowNumber -ge 3 -and (Clean $_.Cells['E']) -ne '' }
Write-Host "  $($dataRows.Count) analysed rows (of $(($analysis | Where-Object { $_.RowNumber -ge 3 }).Count) total)"

Write-Host "Reading '$GlobalSheet' for country and start date ..."
$globalRows = @(Read-XlsxSheet -Path $Workbook -SheetName $GlobalSheet)
$meta = @{}
foreach ($r in ($globalRows | Where-Object { $_.RowNumber -ge 2 })) {
  $id = Clean $r.Cells['A']
  if (-not $id) { continue }
  # Country repeats per victim ("Russia;Russia"), so de-duplicate.
  $meta[$id] = @{ Countries = (Split-Multi $r.Cells['K']); StartDate = (Clean $r.Cells['D']) }
}
Write-Host "  $($meta.Count) incidents indexed"

# ---------------------------------------------------------------- transform

$unknownMarkers = @{}
$scenarios = New-Object System.Collections.ArrayList

foreach ($row in $dataRows) {
  $c = $row.Cells
  $id = Clean $c['M']
  if (-not $id) { $id = "row$($row.RowNumber)" }

  $dvRaw = Clean $c['E']
  $resultKey = if ($DvKeys.ContainsKey($dvRaw)) { $DvKeys[$dvRaw] } else { 'none' }

  # Markers: first listed is primary, the rest secondary.
  $codes = New-Object System.Collections.ArrayList
  foreach ($label in ((Clean $c['H']) -split ';')) {
    $label = $label.Trim()
    if (-not $label) { continue }
    if ($label -like 'None identified*') { continue }
    if ($MarkerCodes.Contains($label)) {
      if (-not $codes.Contains($MarkerCodes[$label])) { [void]$codes.Add($MarkerCodes[$label]) }
    } else {
      $unknownMarkers[$label] = 1 + [int]$unknownMarkers[$label]
    }
  }
  if ($codes.Count -eq 0) { [void]$codes.Add('X') }

  # Year: the workbook's start_date is DD.MM.YYYY; fall back to the
  # trailing year the breach-name convention carries.
  $year = $null
  $m = $meta[$id]
  if ($m -and $m.StartDate -match '(\d{4})') { $year = [int]$Matches[1] }
  if (-not $year) {
    $nameMatches = [regex]::Matches((Clean $c['D']), '(19|20)\d{2}')
    if ($nameMatches.Count -gt 0) { $year = [int]$nameMatches[$nameMatches.Count - 1].Value }
  }

  $sources = New-Object System.Collections.ArrayList
  foreach ($u in (((Clean $c['I']) + ';' + (Clean $c['AC'])) -split '[;\s]+')) {
    $u = $u.Trim()
    if ($u -notmatch '^https?://') { continue }
    if ($sources | Where-Object { $_.url -eq $u }) { continue }
    $label = try { ([uri]$u).Host -replace '^www\.','' } catch { $u }
    [void]$sources.Add([ordered]@{ label = $label; url = $u })
  }

  $confidence = Clean $c['F']
  if ($ConfidenceLabels.ContainsKey($confidence)) {
    $confidence = "$confidence/5 — " + $ConfidenceLabels[$confidence]
  } elseif (-not $confidence) {
    $confidence = 'Not assessed'
  }

  $summary = Clean $c['O']
  if (-not $summary) { $summary = Clean $c['B'] }

  # Text fields are emitted as plain strings: the workbook is English
  # only, and KDQ.i18n.tr() passes a plain string through unchanged in
  # either language, so nothing is invented in translation.
  $entry = [ordered]@{
    id              = $id
    year            = $year
    name            = Clean $c['D']
    breachType      = Clean $c['B']
    resultKey       = $resultKey
    confidence      = $confidence
    victim          = Clean $c['A']
    actor           = Clean $c['C']
    countries       = [object[]]$(if ($m) { @($m.Countries) } else { @() })
    sectors         = [object[]]@(Split-Multi $c['R'] | ForEach-Object { Trim-Parenthetical $_ } | Where-Object { $_ } | Select-Object -Unique)
    subSectors      = [object[]]@(Split-Multi $c['S'])
    primaryMarker   = $codes[0]
    secondaryMarkers = [object[]]@($codes | Select-Object -Skip 1)
    summary         = $summary
    rationale       = Clean $c['G']
    status          = Clean $c['K']
    sources         = [object[]]@($sources)
  }
  $notes = Clean $c['J']
  if ($notes) { $entry.notes = $notes }

  [void]$scenarios.Add($entry)
}

# ---------------------------------------------------------------- emit

$json = ConvertTo-JsonText ([object[]]$scenarios)
$stamp = Get-Date -Format 'yyyy-MM-dd HH:mm'
$book = Split-Path -Leaf $Workbook

$header = @"
/**
 * GENERATED FILE — do not edit by hand.
 *
 * Built from "$book" ($AnalysisSheet)
 * by tools/build-scenarios.ps1 on $stamp.
 * Re-run that script after changing the workbook.
 *
 * Only rows carrying a DV-Type are exported. Text is English only, as
 * the workbook is; KDQ.i18n.tr() passes plain strings through in both
 * languages rather than inventing a translation.
 */
window.KDQ = window.KDQ || {};
KDQ.CONTENT = KDQ.CONTENT || {};
KDQ.CONTENT.scenarios =
"@

$outDir = Split-Path -Parent $OutFile
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }
Set-Content -Path $OutFile -Value ($header + $json + ";`n") -Encoding utf8

Write-Host ""
Write-Host "Wrote $($scenarios.Count) scenarios to $OutFile"
$byType = $scenarios | Group-Object resultKey | Sort-Object Count -Descending
foreach ($g in $byType) { Write-Host ("  {0,4}  {1}" -f $g.Count, $g.Name) }
Write-Host ("  {0,4}  with a year" -f (@($scenarios | Where-Object { $_.year }).Count))
Write-Host ("  {0,4}  with a country" -f (@($scenarios | Where-Object { $_.countries.Count -gt 0 }).Count))
Write-Host ("  {0,4}  with a sector" -f (@($scenarios | Where-Object { $_.sectors.Count -gt 0 }).Count))

if ($unknownMarkers.Count -gt 0) {
  Write-Host ""
  Write-Warning "Risk-marker labels in the sheet with no code in this script (add them to data/content.js AND to `$MarkerCodes above):"
  $unknownMarkers.GetEnumerator() | Sort-Object Value -Descending | ForEach-Object {
    Write-Host ("  {0,4}x  {1}" -f $_.Value, $_.Key)
  }
}
