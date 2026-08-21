/**
 * EDIT ME — the risk-marker taxonomy and the DV outcome texts.
 * Structure is plain JSON assigned to a variable (no build step, works
 * by double-clicking index.html).
 *
 * Breach cases are NOT in this file: data/scenarios.js is generated
 * from the research workbook by tools/build-scenarios.ps1 and assigns
 * KDQ.CONTENT.scenarios after this file has loaded.
 *
 * BILINGUAL FIELDS
 * User-facing prose is written as { "nl": "...", "en": "..." } and read
 * at render time via KDQ.i18n.tr(field). Model vocabulary (relationship
 * "label"/"title", marker "label") is kept identical in both languages
 * on purpose — it's the thesis's coined terminology. A plain string is
 * also accepted and passes through unchanged in either language, which
 * is what the English-only imported cases use.
 *
 * HOW TO ADD A RISK MARKER
 * The taxonomy is extensible (see the workbook's "Method Spec" sheet).
 * Add the entry here, then add its exact label to $MarkerCodes in
 * tools/build-scenarios.ps1 — otherwise the importer cannot map it and
 * will warn about it. A marker without the two questions still works;
 * the Learn stage simply skips it.
 *
 * HOW TO ADD OR CHANGE A DV TYPE
 * Add/edit an entry in "relationships". The key (e.g. "leadership") is
 * what a scenario's "resultKey" references; use "none" for a case where
 * the research found insufficient public evidence to classify.
 * "from"/"to" pick the quadrant endpoints from KDQ.POSITIONS
 * (js/config.js) — omit them (as in "none") to keep the quadrant empty.
 */
window.KDQ = window.KDQ || {};

KDQ.CONTENT = {
  /**
   * knowingDoingQuestion / doctrinalMaterialQuestion: per-marker
   * self-assessment prompts used by the Learn stage (js/learn.js).
   * Users rate agreement 1-5; higher means the pattern is more
   * recognizable within their own organization. "X" has none — it
   * means no marker was evidenced, so there is nothing to assess.
   *
   * The taxonomy is extensible (see the workbook's "Method Spec"
   * sheet): M1-M11 are the established core markers, M12-M17 were
   * added 21-08-2026 during the lifecycle re-analysis. Definitions
   * follow that sheet; a marker without questions is simply skipped
   * by the Learn stage.
   */
  "markers": {
    "M1": {
      "label": "Governance / ownership isolation",
      "definition": { "nl": "Risico-eigenaarschap, accountability of leidinggevend toezicht is versnipperd of afwezig.", "en": "Risk ownership, accountability or leadership supervision is fragmented or absent." },
      "knowingDoingQuestion": { "nl": "Onze mensen weten wie verantwoordelijk is voor dit risico, maar in de praktijk wordt dat eigenaarschap niet actief ingevuld.", "en": "Our people know who owns this risk, but in practice that ownership isn't actively filled in." },
      "doctrinalMaterialQuestion": { "nl": "Er bestaat beleid over eigenaarschap en toezicht, maar de operationele werkelijkheid wijkt daarvan af.", "en": "Policy on ownership and supervision exists, but the operational reality diverges from it." }
    },
    "M2": {
      "label": "Generic knowing-doing execution gap",
      "definition": { "nl": "Een bekende of kenbare controleverwachting wordt geen operationele praktijk.", "en": "A known or knowable control expectation does not become operational practice." },
      "knowingDoingQuestion": { "nl": "We weten wat er moet gebeuren om een bekend risico te beheersen, maar het wordt niet consistent uitgevoerd.", "en": "We know what needs to happen to manage a known risk, but it isn't executed consistently." },
      "doctrinalMaterialQuestion": { "nl": "Onze procedures beschrijven de juiste aanpak, maar de dagelijkse praktijk wijkt daar geregeld van af.", "en": "Our procedures describe the right approach, but daily practice regularly diverges from it." }
    },
    "M3": {
      "label": "Expertise / capability constraint",
      "definition": { "nl": "Specialistische beveiligingskennis bestaat, maar kan niet worden vertaald naar uitvoering door complexiteit, legacy, schaarste of technical debt.", "en": "Specialist security knowledge exists but cannot be translated into execution because of complexity, legacy, skills, capacity or technical debt." },
      "knowingDoingQuestion": { "nl": "Onze specialisten weten wat er nodig is, maar complexiteit of gebrek aan capaciteit verhindert de daadwerkelijke uitvoering.", "en": "Our specialists know what's needed, but complexity or lack of capacity prevents actual execution." },
      "doctrinalMaterialQuestion": { "nl": "We beschikken op papier over de juiste expertise, maar de operationele realiteit (legacy, schaarste, technical debt) maakt toepassing lastig.", "en": "We have the right expertise on paper, but the operational reality (legacy, scarcity, technical debt) makes applying it difficult." }
    },
    "M4": {
      "label": "Asset / dependency visibility gap",
      "definition": { "nl": "De organisatie mist zicht op getroffen assets, afhankelijkheden, accounts, dataopslag of blootstellingspaden.", "en": "The organization lacks visibility of affected assets, dependencies, accounts, data stores or exposure paths." },
      "knowingDoingQuestion": { "nl": "We weten dat overzicht van assets en afhankelijkheden belangrijk is, maar in de praktijk ontbreekt volledig zicht hierop.", "en": "We know visibility of assets and dependencies matters, but in practice full visibility is missing." },
      "doctrinalMaterialQuestion": { "nl": "Er is beleid voor asset- en dependency-management, maar de operationele registratie is onvolledig of verouderd.", "en": "Asset/dependency-management policy exists, but the operational records are incomplete or outdated." }
    },
    "M5": {
      "label": "Patch / configuration latency",
      "definition": { "nl": "Een bekende kwetsbaarheid, configuratiezwakte of beveiligingsbaseline blijft blootgesteld nadat die verholpen had moeten zijn.", "en": "A known vulnerability, configuration weakness or security baseline remains exposed after it should have been remediated." },
      "knowingDoingQuestion": { "nl": "We weten van kwetsbaarheden en beschikbare patches, maar remediëren niet altijd op tijd.", "en": "We know about vulnerabilities and available patches, but don't always remediate on time." },
      "doctrinalMaterialQuestion": { "nl": "Er is een patchbeleid, maar de operationele uitvoering ervan loopt structureel achter.", "en": "A patch policy exists, but its operational execution structurally lags behind." }
    },
    "M6": {
      "label": "Identity / access-control exposure",
      "definition": { "nl": "Zwakte in MFA, IAM, PAM, geprivilegieerde toegang, credentials, secrets of account-levenscyclus.", "en": "Weakness in MFA, IAM, PAM, privileged access, credentials, secrets or account lifecycle." },
      "knowingDoingQuestion": { "nl": "We kennen het belang van MFA en toegangscontrole, maar passen dit niet overal consequent toe.", "en": "We know the importance of MFA and access control, but don't apply it consistently everywhere." },
      "doctrinalMaterialQuestion": { "nl": "Er is een identiteits- en toegangsbeleid, maar de praktijk (legacy accounts, uitzonderingen) wijkt daarvan af.", "en": "An identity/access policy exists, but practice (legacy accounts, exceptions) diverges from it." }
    },
    "M7": {
      "label": "Third-party / supply-chain trust boundary",
      "definition": { "nl": "Vertrouwen in leveranciers, software-updates, MSP's, overgenomen systemen of externe platformen wordt niet gedekt door operationele zekerheid.", "en": "Trust in suppliers, software updates, MSPs, acquired systems or external platforms is not matched by operational assurance." },
      "knowingDoingQuestion": { "nl": "We weten dat leveranciers en updates een risico vormen, maar toetsen dit onvoldoende actief.", "en": "We know suppliers and updates carry risk, but don't actively test for it enough." },
      "doctrinalMaterialQuestion": { "nl": "Er is een leveranciersbeleid, maar de operationele zekerheid over derde partijen is beperkt.", "en": "Supplier policy exists, but operational assurance over third parties is limited." }
    },
    "M8": {
      "label": "Segmentation / containment weakness",
      "definition": { "nl": "De technische architectuur bevat een compromittering onvoldoende; laterale beweging of impact wordt disproportioneel.", "en": "Technical architecture does not contain compromise; lateral movement or blast radius becomes disproportionate." },
      "knowingDoingQuestion": { "nl": "We weten dat segmentatie belangrijk is om verspreiding te beperken, maar de inrichting ervan is niet overal doorgevoerd.", "en": "We know segmentation matters to limit spread, but it isn't implemented everywhere." },
      "doctrinalMaterialQuestion": { "nl": "Er is een segmentatie-architectuur op papier, maar in de praktijk is het netwerk vlakker dan bedoeld.", "en": "A segmentation architecture exists on paper, but in practice the network is flatter than intended." }
    },
    "M9": {
      "label": "Resilience / recovery path dependency",
      "definition": { "nl": "Bedrijfscontinuïteit, herstel of handmatige fallback leunt op fragiele technische of organisatorische aannames.", "en": "Business continuity, recovery or manual fallback depends on fragile technical or organizational assumptions." },
      "knowingDoingQuestion": { "nl": "We weten wat nodig is voor herstel na een incident, maar ons herstelvermogen is in de praktijk nooit volledig getest.", "en": "We know what's needed to recover from an incident, but our recovery capability has never been fully tested in practice." },
      "doctrinalMaterialQuestion": { "nl": "Er is een continuïteits- en herstelplan, maar het steunt op aannames die operationeel nog niet bewezen zijn.", "en": "A continuity/recovery plan exists, but it rests on assumptions not yet proven operationally." }
    },
    "M10": {
      "label": "Data governance / disclosure gap",
      "definition": { "nl": "Retentie, dataminimalisatie, privacyverplichtingen of meldplicht zijn niet geoperationaliseerd.", "en": "Data retention, data minimization, privacy obligations, breach disclosure or trust obligations are not operationalized." },
      "knowingDoingQuestion": { "nl": "We weten wat de meldplicht en dataretentie-eisen zijn, maar passen dit niet altijd consistent toe.", "en": "We know the disclosure and data-retention requirements, but don't always apply them consistently." },
      "doctrinalMaterialQuestion": { "nl": "Er is databeleid, maar de operationele naleving (retentie, meldprocedures) is niet geborgd.", "en": "Data policy exists, but operational compliance (retention, disclosure procedures) isn't secured." }
    },
    "M11": {
      "label": "Monitoring / detection / validation gap",
      "definition": { "nl": "Beveiligingsmonitoring, validatie, alertafhandeling of controle-testing signaleert of bevat het incident niet tijdig.", "en": "Security monitoring, validation, alert handling or control testing fails to identify or contain the incident in time." },
      "knowingDoingQuestion": { "nl": "We weten dat monitoring en validatie belangrijk zijn, maar controleren niet actief of onze detectie ook echt werkt.", "en": "We know monitoring and validation matter, but don't actively verify our detection actually works." },
      "doctrinalMaterialQuestion": { "nl": "Er is monitoring ingericht, maar de operationele effectiviteit ervan (dekking, validatie, opvolging) is onduidelijk.", "en": "Monitoring is set up, but its operational effectiveness (coverage, validation, follow-up) is unclear." }
    },
    "M12": {
      "label": "Egress monitoring gap",
      "definition": { "nl": "Grote hoeveelheden of gevoelige data verlieten het netwerk zonder gedetecteerd of onderbroken te worden. Anders dan de detectiemarker, die gaat over het überhaupt opmerken van de inbraak.", "en": "Bulk or sensitive data left the network without being detected or interrupted. Distinct from the detection marker, which concerns noticing the intrusion at all." },
      "knowingDoingQuestion": { "nl": "We weten dat uitgaand dataverkeer bewaakt moet worden, maar een grote datastroom naar buiten zou ons in de praktijk niet opvallen.", "en": "We know outbound data traffic should be watched, but in practice a large flow of data leaving would not be noticed." },
      "doctrinalMaterialQuestion": { "nl": "Er is beleid over het voorkomen van datalekken, maar operationeel is er geen controle die uitgaande data daadwerkelijk tegenhoudt.", "en": "Policy on preventing data loss exists, but operationally there is no control that actually stops data from leaving." }
    },
    "M13": {
      "label": "Breach notification latency",
      "definition": { "nl": "Een langdurige vertraging tussen detectie of forensische bevestiging en het informeren van toezichthouders, de markt of betrokkenen; inclusief melding die pas volgt door het lek van de aanvaller in plaats van door eigen beoordeling.", "en": "An extended lag between detection or forensic confirmation and informing regulators, the market or affected individuals; includes disclosure triggered by the attacker's leak rather than by the organization's own assessment." },
      "knowingDoingQuestion": { "nl": "We weten binnen welke termijn we moeten melden, maar onder druk zou die termijn waarschijnlijk niet gehaald worden.", "en": "We know the deadline within which we must notify, but under pressure that deadline would probably not be met." },
      "doctrinalMaterialQuestion": { "nl": "Er is een meldprocedure vastgelegd, maar wie wanneer besluit te melden is operationeel niet scherp belegd.", "en": "A notification procedure is documented, but who decides to notify and when is not sharply assigned operationally." }
    },
    "M14": {
      "label": "Recurring unremediated incident pattern",
      "definition": { "nl": "Dezelfde organisatie kende eerdere beveiligingsincidenten waarvan de onderliggende zwaktes niet waren verholpen vóór het geanalyseerde incident.", "en": "The same organization suffered earlier security failures whose underlying weaknesses were not addressed before the incident under analysis." },
      "knowingDoingQuestion": { "nl": "We weten welke zwaktes eerdere incidenten bij ons hebben blootgelegd, maar die zijn niet structureel verholpen.", "en": "We know which weaknesses earlier incidents exposed here, but they have not been structurally remediated." },
      "doctrinalMaterialQuestion": { "nl": "Na incidenten leggen we verbeteracties vast, maar operationeel worden ze zelden volledig doorgevoerd.", "en": "After incidents we record improvement actions, but operationally they are rarely carried through in full." }
    },
    "M15": {
      "label": "Vulnerability disclosure handling gap",
      "definition": { "nl": "Een zwakte werd gemeld door een onderzoeker, klant of andere buitenstaander, en de afhandeling van die melding heeft het incident niet voorkomen.", "en": "A weakness was reported by a researcher, customer or other outside party and the handling of that report did not prevent the incident." },
      "knowingDoingQuestion": { "nl": "We weten dat externe meldingen over kwetsbaarheden serieus opgevolgd moeten worden, maar er is geen route die dat garandeert.", "en": "We know external vulnerability reports must be followed up seriously, but no route guarantees that happens." },
      "doctrinalMaterialQuestion": { "nl": "Er is een responsible-disclosurebeleid, maar de operationele opvolging van binnenkomende meldingen is niet geborgd.", "en": "A responsible-disclosure policy exists, but operational follow-up of incoming reports is not secured." }
    },
    "M16": {
      "label": "Management tooling weaponisation",
      "definition": { "nl": "De eigen beheer- of managementvoorziening (MDM, group policy, deployment- of remote-controltooling) werd tegen de organisatie gebruikt, waardoor de impact zo groot is als het legitieme bereik van dat middel.", "en": "The organization's own administrative or management capability (MDM, group policy, deployment or remote-control tooling) was turned against it, so the blast radius equals the tool's legitimate reach." },
      "knowingDoingQuestion": { "nl": "We weten dat onze beheertooling enorm bereik heeft, maar behandelen die niet als een navenant kritiek risico.", "en": "We know our management tooling has enormous reach, but we don't treat it as a correspondingly critical risk." },
      "doctrinalMaterialQuestion": { "nl": "Er is beleid over beheerde toegang, maar operationeel heeft onze beheertooling breder bereik dan dat beleid veronderstelt.", "en": "Policy on administrative access exists, but operationally our management tooling reaches further than that policy assumes." }
    },
    "M17": {
      "label": "Change / migration window exposure",
      "definition": { "nl": "Het incident vond plaats tijdens een geplande transitie (platform- of ERP-migratie, serververhuizing, systeemovergang) waarbij controles tijdelijk verlaagd waren, eigenaarschap in beweging was of de nieuwe omgeving nog niet gehard was.", "en": "The incident struck during a planned transition (ERP or platform migration, server move, system cutover) in which controls were temporarily reduced, ownership was in flux, or the new environment was not yet hardened." },
      "knowingDoingQuestion": { "nl": "We weten dat migraties risico's opleveren, maar tijdens zo'n traject worden beveiligingscontroles bij ons feitelijk versoepeld.", "en": "We know migrations create risk, but during such a project our security controls are in effect relaxed." },
      "doctrinalMaterialQuestion": { "nl": "Er is een changeproces met beveiligingseisen, maar tijdens migraties wijkt de praktijk daar structureel van af.", "en": "A change process with security requirements exists, but during migrations practice structurally diverges from it." }
    },
    "X": {
      "label": "No DV evidenced",
      "definition": { "nl": "Publiek bewijs ondersteunt geen doctrinal-operationele mismatch.", "en": "Public evidence does not support a doctrinal-operational misalignment." }
    }
  },

  /**
   * Scenarios are NOT defined here: data/scenarios.js is generated
   * from the research workbook by tools/build-scenarios.ps1 and sets
   * KDQ.CONTENT.scenarios once this file has loaded. Re-run that
   * script after changing the workbook.
   */

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
