/**
 * EDIT ME — this is the only file you need to touch to change the
 * self-assessment questions, weighting, the documented breach cases
 * (scenarios) or the outcome texts. Structure is plain JSON assigned
 * to a variable (no build step, works by double-clicking index.html).
 *
 * BILINGUAL FIELDS
 * Any user-facing prose is written as { "nl": "...", "en": "..." } and
 * read at render time via KDQ.i18n.tr(field). The English text for
 * scenarios is the original research wording; Dutch is a translation.
 * Model vocabulary (relationship "label"/"title", marker "label",
 * scenario/source citation labels) is kept identical in both
 * languages on purpose — it's the thesis's coined terminology.
 *
 * HOW THE MANUAL QUIZ SCORES
 * Every quiz answer option carries "weights": how many points it adds
 * to each outcome in "relationships" when picked. The app sums the
 * weights of the selected options across all questions; the outcome
 * with the highest total wins. Ties go to whichever outcome is listed
 * first under "relationships".
 *
 * HOW SCENARIOS WORK
 * Scenarios are real, source-cited data-breach cases from the DV
 * (doctrinal-vs-material) research. Unlike the quiz, a scenario's
 * outcome ("resultKey") is the classification the researcher already
 * assigned — it is not recomputed. Use "none" for a case where the
 * research found insufficient public evidence to assign a DV type
 * (the quadrant stays empty and a short explanation is shown instead).
 *
 * HOW TO ADD A SCENARIO (a new researched case)
 * Add an entry to "scenarios" with a unique "id", a "resultKey" that
 * matches a key in "relationships" (or "none"), and optionally
 * "primaryMarker" / "secondaryMarkers" referencing "markers" below.
 *
 * HOW TO ADD OR CHANGE AN OUTCOME
 * Add/edit an entry in "relationships". The key (e.g. "leadership")
 * is what "weights" and scenario "resultKey" reference. "from"/"to"
 * pick which quadrant cell the dots sit in: knowingDoctrinal,
 * knowingMaterial, doingDoctrinal, doingMaterial (js/config.js).
 * Omit "from"/"to" (as in "none") to keep the quadrant empty.
 */
window.KDQ = window.KDQ || {};

KDQ.CONTENT = {
  "questions": [
    {
      "id": "knowledge-gap",
      "text": { "nl": "Waar zit vandaag het grootste kennistekort in je team?", "en": "Where is the biggest knowledge gap in your team today?" },
      "options": [
        {
          "value": "strategy-understanding",
          "label": { "nl": "In het begrijpen van de strategie — het 'waarom' achter de koers.", "en": "In understanding the strategy — the 'why' behind the direction." },
          "weights": { "leadership": 1, "execution": 1 }
        },
        {
          "value": "practical-skills",
          "label": { "nl": "In technische of operationele vaardigheden.", "en": "In technical or operational skills." },
          "weights": { "expertise-leadership": 1, "expertise-execution": 1 }
        }
      ]
    },
    {
      "id": "team-boost",
      "text": { "nl": "Wat zou je team het meest vooruit helpen?", "en": "What would help your team move forward the most?" },
      "options": [
        {
          "value": "strategic-clarity",
          "label": { "nl": "Een scherper beeld van de strategische richting.", "en": "A sharper picture of the strategic direction." },
          "weights": { "leadership": 1, "execution": 1 }
        },
        {
          "value": "hands-on-expertise",
          "label": { "nl": "Meer praktische, hands-on expertise.", "en": "More practical, hands-on expertise." },
          "weights": { "expertise-leadership": 1, "expertise-execution": 1 }
        }
      ]
    },
    {
      "id": "change-visibility",
      "text": { "nl": "Waar moet verandering het eerst zichtbaar worden?", "en": "Where should change become visible first?" },
      "options": [
        {
          "value": "leadership-decisions",
          "label": { "nl": "In hoe leidinggevenden beslissen en het voorbeeld geven.", "en": "In how leaders decide and set the example." },
          "weights": { "leadership": 1, "expertise-leadership": 1 }
        },
        {
          "value": "daily-execution",
          "label": { "nl": "In hoe teams dagelijks hun werk uitvoeren.", "en": "In how teams carry out their work day to day." },
          "weights": { "execution": 1, "expertise-execution": 1 }
        }
      ]
    },
    {
      "id": "behavior-shift",
      "text": { "nl": "Welk gedrag wil je op korte termijn zien veranderen?", "en": "What behavior do you want to see change in the short term?" },
      "options": [
        {
          "value": "leadership-consistency",
          "label": { "nl": "Consistentere, strategisch onderbouwde beslissingen van leidinggevenden.", "en": "More consistent, strategically grounded decisions from leadership." },
          "weights": { "leadership": 1, "expertise-leadership": 1 }
        },
        {
          "value": "execution-consistency",
          "label": { "nl": "Consistentere uitvoering op de werkvloer.", "en": "More consistent execution on the floor." },
          "weights": { "execution": 1, "expertise-execution": 1 }
        }
      ]
    }
  ],

  "markers": {
    "M1": { "label": "Governance / ownership isolation", "definition": { "nl": "Risico-eigenaarschap, accountability of leidinggevend toezicht is versnipperd of afwezig.", "en": "Risk ownership, accountability or leadership supervision is fragmented or absent." } },
    "M2": { "label": "Generic knowing-doing execution gap", "definition": { "nl": "Een bekende of kenbare controleverwachting wordt geen operationele praktijk.", "en": "A known or knowable control expectation does not become operational practice." } },
    "M3": { "label": "Expertise / capability constraint", "definition": { "nl": "Specialistische beveiligingskennis bestaat, maar kan niet worden vertaald naar uitvoering door complexiteit, legacy, schaarste of technical debt.", "en": "Specialist security knowledge exists but cannot be translated into execution because of complexity, legacy, skills, capacity or technical debt." } },
    "M4": { "label": "Asset / dependency visibility gap", "definition": { "nl": "De organisatie mist zicht op getroffen assets, afhankelijkheden, accounts, dataopslag of blootstellingspaden.", "en": "The organization lacks visibility of affected assets, dependencies, accounts, data stores or exposure paths." } },
    "M5": { "label": "Patch / configuration latency", "definition": { "nl": "Een bekende kwetsbaarheid, configuratiezwakte of beveiligingsbaseline blijft blootgesteld nadat die verholpen had moeten zijn.", "en": "A known vulnerability, configuration weakness or security baseline remains exposed after it should have been remediated." } },
    "M6": { "label": "Identity / access-control exposure", "definition": { "nl": "Zwakte in MFA, IAM, PAM, geprivilegieerde toegang, credentials, secrets of account-levenscyclus.", "en": "Weakness in MFA, IAM, PAM, privileged access, credentials, secrets or account lifecycle." } },
    "M7": { "label": "Third-party / supply-chain trust boundary", "definition": { "nl": "Vertrouwen in leveranciers, software-updates, MSP's, overgenomen systemen of externe platformen wordt niet gedekt door operationele zekerheid.", "en": "Trust in suppliers, software updates, MSPs, acquired systems or external platforms is not matched by operational assurance." } },
    "M8": { "label": "Segmentation / containment weakness", "definition": { "nl": "De technische architectuur bevat een compromittering onvoldoende; laterale beweging of impact wordt disproportioneel.", "en": "Technical architecture does not contain compromise; lateral movement or blast radius becomes disproportionate." } },
    "M9": { "label": "Resilience / recovery path dependency", "definition": { "nl": "Bedrijfscontinuïteit, herstel of handmatige fallback leunt op fragiele technische of organisatorische aannames.", "en": "Business continuity, recovery or manual fallback depends on fragile technical or organizational assumptions." } },
    "M10": { "label": "Data governance / disclosure gap", "definition": { "nl": "Retentie, dataminimalisatie, privacyverplichtingen of meldplicht zijn niet geoperationaliseerd.", "en": "Data retention, data minimization, privacy obligations, breach disclosure or trust obligations are not operationalized." } },
    "M11": { "label": "Monitoring / detection / validation gap", "definition": { "nl": "Beveiligingsmonitoring, validatie, alertafhandeling of controle-testing signaleert of bevat het incident niet tijdig.", "en": "Security monitoring, validation, alert handling or control testing fails to identify or contain the incident in time." } },
    "X": { "label": "No DV evidenced", "definition": { "nl": "Publiek bewijs ondersteunt geen doctrinal-operationele mismatch.", "en": "Public evidence does not support a doctrinal-operational misalignment." } }
  },

  "scenarios": [
    {
      "id": "diginotar",
      "name": { "nl": "DigiNotar (2011) — certificaatcompromittering", "en": "DigiNotar (2011) — certificate compromise" },
      "breachType": { "nl": "Certificaatcompromittering", "en": "Certificate compromise" },
      "resultKey": "leadership",
      "confidence": { "nl": "Hoog", "en": "High" },
      "primaryMarker": "M1",
      "secondaryMarkers": ["M10", "M7"],
      "summary": {
        "nl": "Fraudulente certificaten leidden tot verlies van publiek vertrouwen, overname door de Nederlandse overheid en uiteindelijk faillissement.",
        "en": "Trust-chain collapse; fraudulent certificates; operational takeover by Dutch government; bankruptcy."
      },
      "rationale": {
        "nl": "DigiNotar's rol als vertrouwde certificaatautoriteit vroeg om aantoonbare, gecontroleerde borging. Leidinggevenden lieten een compliance-achtige houding gelden als vervanging voor echte operationele zekerheid — een governance-blinde vlek die, toen browserleveranciers en de overheid het vertrouwen introkken, het bedrijf onhoudbaar maakte.",
        "en": "DigiNotar's strategic role depended on public trust and certification assurance, but leadership allowed a compliance-oriented posture to substitute for real operational assurance. The incident exposed a governance blind spot: management failed to ensure that the public-trust strategy was actually owned, resourced and supervised. The technical weaknesses then became non-linear because browser vendors and the Dutch government withdrew trust, making the company non-viable."
      },
      "notes": {
        "nl": "Gebruik als sterke Strategy→Leadership-case; de markers verklaren waarom dezelfde technische zwakte existentieel werd.",
        "en": "Use as a strong case for governance/accountability failure rather than as a narrow technical breach."
      },
      "sources": [
        { "label": "Leiden University thesis", "url": "https://studenttheses.universiteitleiden.nl/access/item%3A2665708/view" },
        { "label": "Wired", "url": "https://www.wired.com/2011/09/diginotar-bankruptcy/" }
      ]
    },
    {
      "id": "equifax",
      "name": { "nl": "Equifax (2017) — databreach", "en": "Equifax (2017) — data breach" },
      "breachType": { "nl": "Databreach", "en": "Data breach" },
      "resultKey": "execution",
      "confidence": { "nl": "Hoog", "en": "High" },
      "primaryMarker": "M5",
      "secondaryMarkers": ["M4", "M11", "M2"],
      "summary": {
        "nl": "Een bekende, ongepatchte Apache Struts-kwetsbaarheid leidde tot blootstelling van circa 147 miljoen individuen.",
        "en": "Approx. 147 million individuals affected; known Apache Struts vulnerability; long dwell time; regulatory settlement."
      },
      "rationale": {
        "nl": "Het patchbeleid bestond, maar faalde in uitvoering: kennisgeving, asset-inventarisatie en monitoring schoten tekort, waardoor een bekende en oplosbare kwetsbaarheid toch actief bleef.",
        "en": "Equifax had a vulnerability/patching logic that should have converted a known critical vulnerability into timely remediation, but that doctrine failed in execution. Human notification, scanning and asset inventory weaknesses meant that the vulnerable Struts system remained exposed. The resulting breach shows a knowing–doing gap: the risk was knowable and the fix existed, but the operational control chain did not deliver it."
      },
      "notes": {
        "nl": "Niet framen als kennisgebrek — de kern is falende operationalisering van een bekende patchvereiste.",
        "en": "Do not frame as lack of knowledge only; the key is failed operationalization of known patching requirements."
      },
      "sources": [
        { "label": "U.S. House Oversight report", "url": "https://oversight.house.gov/wp-content/uploads/2018/12/Equifax-Report.pdf" },
        { "label": "FTC settlement", "url": "https://www.ftc.gov/enforcement/refunds/equifax-data-breach-settlement" },
        { "label": "Wired", "url": "https://www.wired.com/story/equifax-breach-no-excuse/" }
      ]
    },
    {
      "id": "colonial-pipeline",
      "name": { "nl": "Colonial Pipeline (2021) — ransomware", "en": "Colonial Pipeline (2021) — ransomware" },
      "breachType": { "nl": "Ransomware", "en": "Ransomware" },
      "resultKey": "execution",
      "confidence": { "nl": "Hoog", "en": "High" },
      "primaryMarker": "M6",
      "secondaryMarkers": ["M4", "M9", "M2"],
      "summary": {
        "nl": "Gecompromitteerde VPN-inloggegevens zonder MFA leidden tot een ransomware-aanval en een tijdelijke sluiting van de pijpleiding.",
        "en": "Compromised VPN credentials; MFA not enabled; operational shutdown due to business/IT risk."
      },
      "rationale": {
        "nl": "Het identiteitsbeleid dekte niet alle daadwerkelijke toegangspaden: één inactief VPN-account zonder MFA bleef bruikbaar. Eén enkele credential-zwakte veroorzaakte een disproportionele operationele sluiting.",
        "en": "Colonial Pipeline's exposure was created by an operational gap in remote-access control: an account that should have been disabled or protected with MFA remained usable. The doctrinal control logic of identity verification did not cover all actual access paths. The resulting business disruption was non-linear because a single credential weakness triggered a wider operational shutdown."
      },
      "notes": {
        "nl": "Vermijd overclaiming van OT-compromittering; publieke bronnen wijzen op het bedrijfs-/IT-netwerk als aanleiding voor de sluiting.",
        "en": "Avoid overclaiming OT compromise; public reporting indicates the business/IT network drove the shutdown decision."
      },
      "sources": [
        { "label": "CNN", "url": "https://www.cnn.com/2021/06/04/business/colonial-pipeline-ransomware-attack-password/index.html" },
        { "label": "CISA advisory", "url": "https://www.cisa.gov/news-events/alerts/2021/05/11/darkside-ransomware-best-practices-prevent-business-disruption" }
      ]
    },
    {
      "id": "solarwinds",
      "name": { "nl": "SolarWinds (2020) — supply-chain compromittering", "en": "SolarWinds (2020) — supply-chain compromise" },
      "breachType": { "nl": "Supply-chain compromittering", "en": "Supply-chain compromise" },
      "resultKey": "expertise-execution",
      "confidence": { "nl": "Middel-hoog", "en": "Medium-High" },
      "primaryMarker": "M7",
      "secondaryMarkers": ["M3", "M11", "M4"],
      "summary": {
        "nl": "Gemanipuleerde software-updates (Orion) verspreidden een backdoor naar klanten via een vertrouwd releaseproces.",
        "en": "Compromised software build/update process; signed Orion updates distributed to customers; wide trust impact."
      },
      "rationale": {
        "nl": "Specialistische kennis over secure-SDLC en release-integriteit bestond, maar de operationele releasepijplijn kon manipulatie niet detecteren of voorkomen — een diepe uitvoeringskloof in een hooggespecialiseerd technisch proces.",
        "en": "SolarWinds is best coded as a failure to translate specialist supply-chain and build-integrity expertise into the operational software release pipeline. The attacker's value came from inserting malicious code into a trusted update path; this bypassed normal customer trust assumptions. The case is therefore less a simple missing strategy and more a deep execution gap in a highly specialized technical process."
      },
      "notes": {
        "nl": "Grondoorzaak is technisch complex; attributie/instapvector blijven deels betwist.",
        "en": "Root cause is technically complex and attribution/entry vector remain partly disputed; use as supply-chain/build-pipeline DV."
      },
      "sources": [
        { "label": "CISA ED 21-01", "url": "https://www.cisa.gov/news-events/directives/ed-21-01-mitigate-solarwinds-orion-code-compromise" },
        { "label": "Mandiant (Google Cloud)", "url": "https://cloud.google.com/blog/topics/threat-intelligence/sunburst-additional-technical-details" },
        { "label": "Wired", "url": "https://www.wired.com/story/the-untold-story-of-solarwinds-the-boldest-supply-chain-hack-ever/" }
      ]
    },
    {
      "id": "maersk",
      "name": { "nl": "Maersk (2017) — NotPetya-malware", "en": "Maersk (2017) — NotPetya malware" },
      "breachType": { "nl": "Malware / wiper", "en": "Malware / wiper" },
      "resultKey": "expertise-execution",
      "confidence": { "nl": "Middel", "en": "Medium" },
      "primaryMarker": "M9",
      "secondaryMarkers": ["M8", "M3", "M7"],
      "summary": {
        "nl": "NotPetya-malware, extern binnengekomen via een leverancier, leidde tot wereldwijde operationele uitval.",
        "en": "NotPetya spread from an external supply-chain vector; global Windows/AD dependency; major operational outage."
      },
      "rationale": {
        "nl": "De impact werd niet-lineair door de mondiale Windows/Active Directory-afhankelijkheid: een regionale infectie werd een wereldwijde uitval. De kloof zit tussen expertkennis over segmentatie/herstel en de materiële implementatie van een sterk verweven IT-landschap.",
        "en": "The initial NotPetya vector was outside Maersk, but Maersk's non-linear impact came from the operational architecture: global Windows and Active Directory dependency allowed a regional infection to become an enterprise-wide outage. The relevant gap is between expert knowledge about segmentation, backup and cyber recovery, and the material implementation of a highly interdependent estate."
      },
      "notes": {
        "nl": "Gebruik voor amplificatie en herstel, niet voor de initiële externe infectievector.",
        "en": "Use carefully: the malware was externally introduced via M.E.Doc; the DV claim concerns amplification and recovery, not initial compromise."
      },
      "sources": [
        { "label": "NIPV (Instituut Fysieke Veiligheid)", "url": "https://archief.nipv.nl/wp-content/uploads/sites/2/2022/03/2018-IFV-H6-Cyberaanval-op-Maersk.pdf" },
        { "label": "Wired", "url": "https://www.wired.com/story/notpetya-cyberattack-ukraine-russia-code-crashed-the-world/" }
      ]
    },
    {
      "id": "british-airways",
      "name": { "nl": "British Airways (2018) — databreach", "en": "British Airways (2018) — data breach" },
      "breachType": { "nl": "Databreach", "en": "Data breach" },
      "resultKey": "execution",
      "confidence": { "nl": "Hoog", "en": "High" },
      "primaryMarker": "M6",
      "secondaryMarkers": ["M11", "M10", "M2"],
      "summary": {
        "nl": "Magecart-skimmingcode op de betaalpagina leidde tot diefstal van betaal- en persoonsgegevens en een ICO-boete.",
        "en": "Third-party credentials, Citrix access, plaintext payment logs and malicious JavaScript skimming."
      },
      "rationale": {
        "nl": "De 22 regels kwaadaardige JavaScript werden effectief doordat meerdere controlelagen — toegang van derden, geprivilegieerde credentials, platte-tekst betaallogs en monitoring — niet consequent werden uitgevoerd.",
        "en": "The root issue was not just 22 lines of malicious JavaScript; that code became effective because several control layers were not executed consistently. Third-party access, privileged credentials, plaintext payment logs and web-change monitoring did not match the expected security doctrine for a major airline processing payment data."
      },
      "notes": {
        "nl": "Sterke bronkwaliteit: het ICO-boetebesluit geeft gedetailleerde controle-fouten.",
        "en": "Strong source quality because the ICO penalty notice provides detailed control failures."
      },
      "sources": [
        { "label": "UK ICO penalty notice", "url": "https://ico.org.uk/media/action-weve-taken/mpns/2618421/ba-penalty-20201016.pdf" },
        { "label": "RiskIQ", "url": "https://www.riskiq.com/blog/labs/magecart-british-airways-breach/" }
      ]
    },
    {
      "id": "marriott",
      "name": { "nl": "Marriott / Starwood (2018) — databreach", "en": "Marriott / Starwood (2018) — data breach" },
      "breachType": { "nl": "Databreach", "en": "Data breach" },
      "resultKey": "leadership",
      "confidence": { "nl": "Hoog", "en": "High" },
      "primaryMarker": "M1",
      "secondaryMarkers": ["M10", "M4", "M11"],
      "summary": {
        "nl": "Jarenlang onopgemerkte inbraak in overgenomen Starwood-systemen leidde tot blootstelling van klantgegevens en regelgevende boetes.",
        "en": "Long dwell time in acquired Starwood systems; insufficient acquisition due diligence and security integration."
      },
      "rationale": {
        "nl": "De strategie van accountability over overgenomen klantdata werd niet vertaald naar leidinggevende controle over integratierisico — een governance-blinde vlek tussen bedrijfsexpansie en operationele beveiliging.",
        "en": "The breach is best understood as an ownership and acquisition-governance failure: Marriott acquired Starwood but did not sufficiently assure the inherited systems and data security posture. The strategy of corporate accountability over acquired customer data did not translate into leadership-level control over integration risk."
      },
      "notes": {
        "nl": "Gebruik als ownership/isolation-case: risico werd overgenomen via acquisitie en niet snel genoeg gegouverneerd.",
        "en": "Use as an ownership/isolation case: risk was inherited through acquisition and not governed quickly enough."
      },
      "sources": [
        { "label": "FTC action against Marriott/Starwood", "url": "https://www.ftc.gov/news-events/news/press-releases/2024/10/ftc-takes-action-against-marriott-starwood-over-data-breaches" },
        { "label": "UK ICO statement", "url": "https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2019/07/ico-statement-intention-to-fine-marriott-international-inc-more-than-99-million-under-gdpr-for-data-breach/" }
      ]
    },
    {
      "id": "norsk-hydro",
      "name": { "nl": "Norsk Hydro (2019) — ransomware (contrastcase)", "en": "Norsk Hydro (2019) — ransomware (contrast case)" },
      "breachType": { "nl": "Ransomware", "en": "Ransomware" },
      "resultKey": "none",
      "confidence": { "nl": "Laag / niet gecodeerd", "en": "Low / not coded" },
      "primaryMarker": "X",
      "secondaryMarkers": [],
      "summary": {
        "nl": "LockerGoga-ransomware verstoorde de productie; het bedrijf herstelde transparant via back-ups, zonder losgeld te betalen.",
        "en": "LockerGoga ransomware; production disruption; transparent crisis response and backup-based recovery."
      },
      "rationale": {
        "nl": "Publieke bronnen tonen vooral impact en een sterke crisisrespons, maar geven onvoldoende grondoorzaak-bewijs voor een doctrinal-operationele DV-classificatie.",
        "en": "Public sources show major operational impact and strong crisis response, but do not give enough root-cause evidence for a doctrinal-operational DV assignment."
      },
      "notes": {
        "nl": "Gebruik als contrastcase — DV-kolommen blijven bewust leeg.",
        "en": "Leave DV columns empty; useful as a contrast case."
      },
      "sources": [
        { "label": "CyOTE case study", "url": "https://cyote.inl.gov/content/uploads/24/2025/12/CyOTE-Case-Study_Norsk-Hydro.pdf" },
        { "label": "Microsoft", "url": "https://news.microsoft.com/source/features/digital-transformation/hackers-hit-norsk-hydro-ransomware-company-responded-transparency/" },
        { "label": "Wired", "url": "https://www.wired.com/story/norsk-hydro-cyber-attack/" }
      ]
    },
    {
      "id": "travelex",
      "name": { "nl": "Travelex (2019) — ransomware", "en": "Travelex (2019) — ransomware" },
      "breachType": { "nl": "Ransomware", "en": "Ransomware" },
      "resultKey": "execution",
      "confidence": { "nl": "Middel-hoog", "en": "Medium-High" },
      "primaryMarker": "M5",
      "secondaryMarkers": ["M6", "M2"],
      "summary": {
        "nl": "Een ongepatchte Pulse Secure VPN-kwetsbaarheid leidde tot een ransomware-aanval en grote bedrijfsuitval.",
        "en": "Unpatched Pulse Secure VPN vulnerability; ransomware deployment; large operational outage."
      },
      "rationale": {
        "nl": "Een bekende en patchbare kwetsbaarheid in extern toegankelijke VPN-infrastructuur bleef exploiteerbaar — een klassieke kloof tussen beleid en praktijk in kwetsbaarhedenbeheer.",
        "en": "Travelex is a classic case where the external-facing VPN became the gap between policy and practice: a known and patchable vulnerability remained exploitable. This is not mainly a leadership-theory case, because the immediate DV lies in the failed operationalization of vulnerability management."
      },
      "notes": {
        "nl": "Publieke bronnen wijzen consistent naar Pulse Secure; wees voorzichtig zonder zicht op het interne patchproces.",
        "en": "Public sources consistently point to Pulse Secure; use with caution if the exact internal patch process is not available."
      },
      "sources": [
        { "label": "Bridewell", "url": "https://www.bridewell.com/insights/blogs/detail/lessons-from-the-travelex-cyber-attack" },
        { "label": "Wired", "url": "https://www.wired.com/story/vpn-hacks-pulse-secure-espionage/" }
      ]
    },
    {
      "id": "uber",
      "name": { "nl": "Uber (2022) — interne systemen gecompromitteerd", "en": "Uber (2022) — internal systems compromised" },
      "breachType": { "nl": "Databreach / interne systemen", "en": "Data breach / internal systems" },
      "resultKey": "execution",
      "confidence": { "nl": "Middel-hoog", "en": "Medium-High" },
      "primaryMarker": "M6",
      "secondaryMarkers": ["M11", "M3", "M2"],
      "summary": {
        "nl": "MFA-fatigue/social engineering en bereikbare geprivilegieerde credentials leidden tot toegang tot interne systemen.",
        "en": "MFA fatigue/social engineering; hardcoded privileged credentials in internal scripts/network shares; access to admin systems."
      },
      "rationale": {
        "nl": "MFA bestond, maar was kwetsbaar voor social-engineering-goedkeuringsmoeheid, en geprivilegieerde credentials waren bereikbaar in interne scripts — een falende uitvoering van identiteits- en secrets-managementbeleid.",
        "en": "Uber's incident shows a gap between the expected identity/security-control model and how those controls operated in practice. MFA existed, but was vulnerable to social-engineering approval fatigue, and privileged credentials were reportedly reachable in internal resources."
      },
      "notes": {
        "nl": "Betreft het 2022-incident, niet de 2016-inbraak/cover-up.",
        "en": "This case is based on the 2022 Uber incident, not the 2016 breach/cover-up."
      },
      "sources": [
        { "label": "Wired", "url": "https://www.wired.com/story/uber-hack-mfa-phishing/" },
        { "label": "The Guardian", "url": "https://www.theguardian.com/technology/2022/sep/15/uber-computer-network-hack-report" },
        { "label": "Uber newsroom", "url": "https://www.uber.com/newsroom/security-update/" }
      ]
    },
    {
      "id": "maastricht-university",
      "name": { "nl": "Maastricht University (2019) — ransomware", "en": "Maastricht University (2019) — ransomware" },
      "breachType": { "nl": "Ransomware", "en": "Ransomware" },
      "resultKey": "execution",
      "confidence": { "nl": "Middel", "en": "Medium" },
      "primaryMarker": "M11",
      "secondaryMarkers": ["M8", "M6", "M3", "M2"],
      "summary": {
        "nl": "Een phishing-/malwareketen met vertraagde containment leidde tot grootschalige encryptie van de Windows-omgeving.",
        "en": "Phishing/malware chain; delayed containment; large-scale Windows environment encrypted."
      },
      "rationale": {
        "nl": "Bekende controles rond awareness, detectie, segmentatie en respons functioneerden onvoldoende effectief in een gedecentraliseerde, complexe omgeving om de ransomware-keten te stoppen.",
        "en": "The attack chain depended on operational security controls that did not stop or contain the intrusion before ransomware deployment. The university context is decentralized and complex, but the main point is that known controls around awareness, detection, segmentation and response did not execute effectively enough."
      },
      "notes": {
        "nl": "Kan geherclassificeerd worden als Expertise→Execution als de nadruk ligt op gedecentraliseerde IT-capaciteitsbeperkingen.",
        "en": "Could be recoded as Expertise→Execution if you emphasize decentralized IT capability constraints rather than control execution."
      },
      "sources": [
        { "label": "SURF case study", "url": "https://www.surf.nl/en/case-study/what-maastricht-university-learned-from-the-ransomware-attack-part-1" },
        { "label": "Maastricht University", "url": "https://www.maastrichtuniversity.nl/about-um/cyber-attack-um-2019" }
      ]
    },
    {
      "id": "knvb",
      "name": { "nl": "KNVB — databreach (contrastcase)", "en": "KNVB — data breach (contrast case)" },
      "breachType": { "nl": "Databreach / ransomware-claim", "en": "Data breach / ransomware claim" },
      "resultKey": "none",
      "confidence": { "nl": "Laag / niet gecodeerd", "en": "Low / not coded" },
      "primaryMarker": "X",
      "secondaryMarkers": [],
      "summary": {
        "nl": "Interne gegevens raakten blootgesteld, maar publieke bronnen bevatten onvoldoende forensisch detail voor een DV-classificatie.",
        "en": "Public root-cause details insufficient."
      },
      "rationale": {
        "nl": "Er is onvoldoende publiek grondoorzaak-materiaal om een DV-marker toe te kennen.",
        "en": "There is insufficient public root-cause material to assign a DV marker. Data exposure is visible as impact, but the underlying mismatch between doctrine and operations is not evidenced enough."
      },
      "notes": {
        "nl": "Blijf op 'geen DV aangetoond' tenzij een intern incidentrapport of betrouwbare forensische bron beschikbaar komt.",
        "en": "Keep as blank DV unless an internal incident report or reliable forensic source becomes available."
      },
      "sources": []
    },
    {
      "id": "odido",
      "name": { "nl": "Odido (2026) — databreach (contrastcase)", "en": "Odido (2026) — data breach (contrast case)" },
      "breachType": { "nl": "Databreach", "en": "Data breach" },
      "resultKey": "none",
      "confidence": { "nl": "Laag / niet gecodeerd", "en": "Low / not coded" },
      "primaryMarker": "X",
      "secondaryMarkers": [],
      "summary": {
        "nl": "Onbevoegde toegang tot een klantcontactsysteem trof circa 6 miljoen accounts; onderzoek loopt nog.",
        "en": "Unauthorized access to customer contact system; large-scale customer data exposure; investigation ongoing."
      },
      "rationale": {
        "nl": "Publieke bronnen bevestigen onbevoegde toegang en blootstelling, maar geven onvoldoende grondoorzaak-detail voor een specifieke knowing-doing-classificatie.",
        "en": "Reuters and public reporting confirm unauthorized access to a customer-contact system and large data exposure, but do not yet provide enough forensic root-cause detail to prove a doctrinal-operational DV."
      },
      "notes": {
        "nl": "Geherclassificeerd naar 'geen DV aangetoond' om de dataset methodologisch strikt te houden.",
        "en": "Recoded to no DV evidenced to keep the dataset methodologically strict."
      },
      "sources": [
        { "label": "Reuters", "url": "https://www.reuters.com/business/media-telecom/dutch-telecom-odido-hacked-6-million-accounts-affected-2026-02-12/" },
        { "label": "Reuters (follow-up)", "url": "https://www.reuters.com/business/media-telecom/hacking-group-begins-leaking-customer-data-dutch-telecom-odido-hack-2026-02-26/" }
      ]
    },
    {
      "id": "jaguar-land-rover",
      "name": { "nl": "Jaguar Land Rover (2025) — cyberincident (contrastcase)", "en": "Jaguar Land Rover (2025) — cyber incident (contrast case)" },
      "breachType": { "nl": "Cyberincident / operationele verstoring", "en": "Cyber incident / operational disruption" },
      "resultKey": "none",
      "confidence": { "nl": "Laag / niet gecodeerd", "en": "Low / not coded" },
      "primaryMarker": "X",
      "secondaryMarkers": [],
      "summary": {
        "nl": "Een cyberincident leidde tot productiestop en verstoring van de toeleveringsketen; sommige data was mogelijk getroffen.",
        "en": "Severe operational disruption, but public root-cause and control-failure details remain limited."
      },
      "rationale": {
        "nl": "Publieke bronnen tonen impact en respons, maar niet de onderliggende doctrinal-operationele mismatch.",
        "en": "Public reporting shows severe production and supply-chain impact, but not the technical or governance root cause. Therefore no DV marker should be coded yet."
      },
      "notes": {
        "nl": "DV-kolommen blijven leeg tot toezichthouder-, forensisch of gedetailleerd technisch verslag verschijnt.",
        "en": "Leave DV columns empty until regulator, forensic or detailed technical reporting appears."
      },
      "sources": [
        { "label": "JLR statement", "url": "https://media.jaguarlandrover.com/news/2025/09/statement-cyber-incident" },
        { "label": "Reuters", "url": "https://www.reuters.com/world/uk/britains-jlr-says-some-data-affected-by-cybersecurity-incident-2025-09-10/" },
        { "label": "AP News", "url": "https://apnews.com/article/46fb6fa68b2eb611ff8fc7dac4cd5aec" }
      ]
    },
    {
      "id": "yahoo",
      "name": { "nl": "Yahoo (2013–2014) — databreach", "en": "Yahoo (2013–2014) — data breach" },
      "breachType": { "nl": "Databreach", "en": "Data breach" },
      "resultKey": "leadership",
      "confidence": { "nl": "Middel-hoog", "en": "Medium-High" },
      "primaryMarker": "M10",
      "secondaryMarkers": ["M1", "M11"],
      "summary": {
        "nl": "Honderden miljoenen tot miljarden accounts getroffen; vertraagde openbaarmaking leidde tot een SEC-schikking.",
        "en": "Long-running compromise; stolen user database; forged cookies; delayed disclosure/governance failures."
      },
      "rationale": {
        "nl": "Vooral een governance-/accountabilitycase: de strategische verplichting om materieel cyberrisico te beveiligen én te melden werd niet vertaald naar daadwerkelijke afhandeling — herhaalde schaal en vertraagde disclosure versterkten de impact tot regelgevend en transactieniveau.",
        "en": "Yahoo is best framed as a governance and accountability case, not only as a technical account compromise. The incident exposed a leadership gap between the strategic obligation to safeguard and disclose material cyber risk and the organization's actual handling of the breach."
      },
      "notes": {
        "nl": "Houd de 2013- en 2014-inbraken uit elkaar bij gebruik van exacte cijfers.",
        "en": "Useful for leadership/disclosure governance; separate clearly between the 2013 and 2014 Yahoo breaches if you use detailed numbers."
      },
      "sources": [
        { "label": "SEC press release", "url": "https://www.sec.gov/news/press-release/2018-71" },
        { "label": "Wired", "url": "https://www.wired.com/story/yahoo-hack-massive-data-breach-confirmed/" }
      ]
    },
    {
      "id": "sony-pictures",
      "name": { "nl": "Sony Pictures (2014) — databreach / wiper", "en": "Sony Pictures (2014) — data breach / wiper" },
      "breachType": { "nl": "Databreach / wiper malware", "en": "Data breach / wiper malware" },
      "resultKey": "leadership",
      "confidence": { "nl": "Middel", "en": "Medium" },
      "primaryMarker": "M1",
      "secondaryMarkers": ["M3", "M11", "M9"],
      "summary": {
        "nl": "Destructieve malware leidde tot uitgebreide datadiefstal, verstoorde systemen en een reputatiecrisis.",
        "en": "Under-resourced security team; destructive malware; extensive data theft and operational disruption."
      },
      "rationale": {
        "nl": "Het publieke debat richtte zich niet alleen op de vaardigheid van de aanvaller, maar op leidinggevende keuzes rond beveiligingsbudget en risico-acceptatie: de strategische noodzaak om waardevol IP en medewerkersgegevens te beschermen werd niet gematcht door leidinggevende investering en voorbereiding.",
        "en": "The public debate around Sony focused not only on attacker sophistication but on leadership decisions around security resourcing and risk acceptance. The organization's strategic need to protect high-value intellectual property and employee data was not matched by leadership-level investment and preparedness."
      },
      "notes": {
        "nl": "Gebruik als leiderschaps-/resourcingcase, niet als precieze technische grondoorzaak-case.",
        "en": "Some sources emphasize attacker sophistication; use as a leadership/resource-prioritization case, not as a precise technical-root-cause case."
      },
      "sources": [
        { "label": "Time", "url": "https://time.com/3620288/sony-hack-unprepared/" },
        { "label": "FBI", "url": "https://www.fbi.gov/news/press-releases/update-on-sony-investigation" }
      ]
    }
  ],

  "relationships": {
    "leadership": {
      "label": "Strategy to Leadership",
      "from": "leadershipTop",
      "to": "leadershipBottom",
      "color": "#595959",
      "dash": false,
      "title": "Strategy → Leadership",
      "text": {
        "nl": "Jouw team kent de strategie, maar die kennis vertaalt zich nog onvoldoende in het gedrag van leidinggevenden. De focus ligt op voorleven: besluiten, prioriteiten en communicatie die zichtbaar in lijn zijn met de koers. In het onderzoek naar 16 gedocumenteerde databreaches was dit de classificatie voor 4 cases: DigiNotar, Marriott/Starwood, Yahoo en Sony Pictures.",
        "en": "Strategy is not translated into governance, ownership, resourcing, supervision or disclosure accountability — a leadership-level governance blind spot limits operational assurance. In this research of 16 documented data breaches, this was the classification for 4 cases: DigiNotar, Marriott/Starwood, Yahoo and Sony Pictures."
      }
    },
    "execution": {
      "label": "Strategy to Execution",
      "from": "executionTop",
      "to": "executionBottom",
      "color": "#8c1f28",
      "dash": false,
      "title": "Strategy → Execution",
      "text": {
        "nl": "De strategie is helder, maar landt niet vanzelf op de werkvloer. Dit is de klassieke kennis–doen kloof: de opgave is om strategische keuzes te vertalen naar concrete, dagelijkse uitvoering. Dit was de meest voorkomende classificatie in het onderzoek: 6 van de 16 cases, waaronder Equifax, Colonial Pipeline, British Airways, Travelex, Uber en Maastricht University.",
        "en": "Policy or control logic exists or is knowable, but operational implementation fails — the known control model does not execute in practice. This was the most common classification in the research: 6 of the 16 cases, including Equifax, Colonial Pipeline, British Airways, Travelex, Uber and Maastricht University."
      }
    },
    "expertise-leadership": {
      "label": "Expertise to Leadership",
      "from": "expertiseLeadershipTop",
      "to": "expertiseLeadershipBottom",
      "color": "#9a9a9a",
      "dash": true,
      "title": "Expertise → Leadership",
      "text": {
        "nl": "Er is sterke operationele expertise aanwezig, maar die voedt de besluiten van leidinggevenden nog te weinig. Betrek de mensen die het werk kennen directer bij strategische keuzes. Let op: het onderliggende onderzoek codeerde slechts drie dual-vulnerability-typen (Strategy→Leadership, Strategy→Execution, Expertise→Execution); Expertise→Leadership is de theoretische vierde cel van het kwadrant en maakte geen deel uit van het coderingsschema — geen van de 16 cases viel hierin, wat zelf een interessant onderzoeksgat is.",
        "en": "Strong operational expertise exists, but it barely feeds into leadership decisions — the people who know the work aren't close enough to strategic choices. Note: the underlying research coded only three dual-vulnerability types (Strategy→Leadership, Strategy→Execution, Expertise→Execution); Expertise→Leadership is the theoretical fourth quadrant cell and was not part of the coding scheme — none of the 16 cases fell here, which is itself a notable research gap."
      }
    },
    "expertise-execution": {
      "label": "Expertise to Execution",
      "from": "expertiseExecutionTop",
      "to": "expertiseExecutionBottom",
      "color": "#595959",
      "dash": false,
      "title": "Expertise → Execution",
      "text": {
        "nl": "De vakkennis is aanwezig, de opgave zit in consistentie. Vertaal expertise naar herhaalbare routines, coaching en feedback op de werkvloer. In dit onderzoek gold dit voor 2 van de 16 cases: SolarWinds en Maersk.",
        "en": "Specialist knowledge exists, but complexity, legacy, technical debt or capacity prevents implementation — expertise exists but cannot be operationalized. In this research this applied to 2 of the 16 cases: SolarWinds and Maersk."
      }
    },
    "none": {
      "label": "No DV evidenced",
      "color": "#b8b6b2",
      "dash": false,
      "title": "No DV evidenced",
      "text": {
        "nl": "Niet elke databreach levert voldoende publiek bewijs op voor een doctrinal-operationele classificatie. Waar het grondoorzaak-bewijs te dun is, blijft de classificatie bewust leeg — dat is onderdeel van een strikte onderzoeksmethode die vermijdt om elke breach geforceerd in één van de vier typen te persen. In dit onderzoek gold dat voor 4 van de 16 cases: Norsk Hydro, KNVB, Odido en Jaguar Land Rover.",
        "en": "Not every data breach yields enough public evidence for a doctrinal-operational classification. Where root-cause evidence is too thin, the classification deliberately stays empty — part of a strict research method that avoids forcing every breach into one of the four types. In this research that applied to 4 of the 16 cases: Norsk Hydro, KNVB, Odido and Jaguar Land Rover."
      }
    }
  }
};
