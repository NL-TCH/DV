/**
 * EDIT ME — static UI chrome text (headings, buttons, labels) in both
 * languages. Content that comes from research data (questions,
 * scenarios, outcomes) lives in data/content.js instead, with the
 * same {nl, en} pattern.
 *
 * Adding a language: add its key to every entry below AND to
 * KDQ.i18n's SUPPORTED_LANGS list in js/i18n.js.
 */
window.KDQ = window.KDQ || {};

KDQ.STRINGS = {
  "meta.title": { "nl": "Threat analysis by the Dual Vulnerabilities framework", "en": "Threat analysis by the Dual Vulnerabilities framework" },

  "hero.title": { "nl": "Threat analysis by the Dual Vulnerabilities framework", "en": "Threat analysis by the Dual Vulnerabilities framework" },
  "hero.subtitle": { "nl": "Een systemische cyberrisico-lens voor leergerichte post-mortem breach-analyse.", "en": "A systemic cyber-risk lens for learning-oriented post-mortem breach analysis." },

  "intro.line": { "nl": "Een dual vulnerability ontstaat wanneer wat je organisatie weet niet overeenkomt met wat ze doet — deze tool laat zien welk patroon dat oplevert.", "en": "A dual vulnerability arises when what your organization knows doesn't match what it actually does — this tool shows which pattern that creates." },

  "scenario.searchPlaceholder": { "nl": "Zoek op naam…", "en": "Search by name…" },
  "scenario.noResults": { "nl": "Geen breaches gevonden voor deze zoekopdracht.", "en": "No breaches found for this search." },

  "nav.perspectiveLabel": { "nl": "Kies je leerperspectief", "en": "Select learning perspective" },
  "nav.selectBreach": { "nl": "Kies een cyber breach", "en": "Select cyber breach" },
  "nav.selectMarker": { "nl": "Kies een risicomarker", "en": "Select risk marker" },
  "nav.selectDv": { "nl": "Kies een dual vulnerability-type", "en": "Select dual vulnerability type" },
  "nav.backToMarkers": { "nl": "← Alle risicomarkers", "en": "← All risk markers" },
  "nav.backToDvTypes": { "nl": "← Alle DV-types", "en": "← All DV types" },
  "nav.breachSingular": { "nl": "breach", "en": "breach" },
  "nav.breachPlural": { "nl": "breaches", "en": "breaches" },
  "nav.aboutData": { "nl": "Over de data", "en": "About the data" },

  "filter.toggle": { "nl": "Filters", "en": "Filters" },
  "filter.industry": { "nl": "Sector", "en": "Industry" },
  "filter.country": { "nl": "Land", "en": "Country" },
  "filter.year": { "nl": "Periode", "en": "Year" },
  "filter.clear": { "nl": "Filters wissen", "en": "Clear filters" },

  "perspective.breach": { "nl": "Cyber breach", "en": "Cyber breach" },
  "perspective.breachHint": { "nl": "Begin bij een gedocumenteerde case.", "en": "Start from a documented case." },
  "perspective.markers": { "nl": "Risicomarkers", "en": "Risk markers" },
  "perspective.markersHint": { "nl": "Begin bij een patroon en zie waar het voorkomt.", "en": "Start from a pattern and see where it occurs." },
  "perspective.dv": { "nl": "Dual vulnerability", "en": "Dual vulnerability" },
  "perspective.dvHint": { "nl": "Begin bij het model en de vier DV-types.", "en": "Start from the model and its four DV types." },

  "stage.understand": { "nl": "Understand", "en": "Understand" },
  "stage.understandHint": { "nl": "Wat is er gebeurd", "en": "What happened" },
  "stage.learn": { "nl": "Learn", "en": "Learn" },
  "stage.learnHint": { "nl": "Wat betekent het voor ons", "en": "What it means for us" },
  "stage.extract": { "nl": "Extract", "en": "Extract" },
  "stage.extractHint": { "nl": "Waar handelen we eerst op", "en": "What to act on first" },

  "understand.contextHeading": { "nl": "Context", "en": "Context" },
  "understand.year": { "nl": "Jaar", "en": "Year" },
  "understand.dvHeading": { "nl": "DV-type", "en": "DV type" },
  "understand.markersHeading": { "nl": "Risicomarkers", "en": "Risk markers" },
  "understand.lessonsHeading": { "nl": "Lessons learned vanuit DV-perspectief", "en": "Lessons learned from the DV perspective" },
  "understand.lessonsLead": { "nl": "Gelezen door de {type}-lens levert deze case de volgende aandachtspunten op:", "en": "Read through the {type} lens, this case yields the following points of attention:" },

  "markerBlock.dvHeading": { "nl": "Komt voor bij deze DV-types", "en": "Occurs within these DV types" },

  "learn.hint": { "nl": "Scoor per risicomarker hoe deze case zich verhoudt tot jouw eigen organisatie. Die scores voeden het Extract-rapport.", "en": "Score each risk marker against your own organization. These scores feed the Extract report." },
  "learn.progress": { "nl": "{done} van {total} risicomarkers volledig gescoord", "en": "{done} of {total} risk markers fully scored" },
  "learn.noMarkers": { "nl": "Voor deze case zijn geen risicomarkers gecodeerd, dus er valt hier niets te scoren.", "en": "No risk markers were coded for this case, so there is nothing to score here." },
  "learn.scaleLegend": { "nl": "Schaal 1 (laag) tot 5 (hoog)", "en": "Scale 1 (low) to 5 (high)" },
  "learn.reflectHeading": { "nl": "Reflecteer / contextualiseer", "en": "Reflect / contextualize" },
  "learn.businessHeading": { "nl": "Business case", "en": "Business case" },
  "learn.dynamicsHeading": { "nl": "Urgentie — Ashby's requisite variety", "en": "Urgency — Ashby's requisite variety" },
  "learn.benefit": { "nl": "Baat van aanpakken", "en": "Benefit of addressing it" },
  "learn.cost": { "nl": "Kosten van aanpakken", "en": "Cost of addressing it" },
  "learn.markerDynamics": { "nl": "Dynamiek van de marker", "en": "Marker dynamics" },
  "learn.mgmtDynamics": { "nl": "Dynamiek van de aansturing", "en": "Management dynamics" },

  "extract.incomplete": { "nl": "Scoor eerst minstens één risicomarker volledig in de Learn-fase; dit rapport wordt daaruit opgebouwd.", "en": "Score at least one risk marker completely in the Learn stage first; this report is built from those scores." },
  "extract.partial": { "nl": "Gebaseerd op {done} van {total} risicomarkers — vul de rest aan in de Learn-fase voor een compleet beeld.", "en": "Based on {done} of {total} risk markers — complete the rest in the Learn stage for a full picture." },
  "extract.relevanceHeading": { "nl": "Contextuele relevantie van deze breach", "en": "Contextual relevance of this breach" },
  "extract.priorityHeading": { "nl": "Lessons learned, op prioriteit", "en": "Lessons learned, by priority" },
  "extract.priorityHint": { "nl": "Prioriteit weegt relevantie en urgentie elk voor 40%, en rendement voor 20%.", "en": "Priority weighs relevance and urgency at 40% each, and return at 20%." },
  "extract.chartHeading": { "nl": "Rendement tegen urgentie", "en": "Return against urgency" },
  "extract.chartLegend": { "nl": "De grootte van elke bel is de relevantie van die marker voor jouw organisatie. Rechtsboven betekent: veel rendement, en het kan niet wachten.", "en": "Each bubble's size is that marker's relevance to your organization. Top-right means: high return, and it cannot wait." },
  "extract.axisX": { "nl": "Horizontaal: requisite-variety gap (markerdynamiek − aansturingsdynamiek)", "en": "Horizontal: requisite-variety gap (marker dynamics − management dynamics)" },
  "extract.axisY": { "nl": "Verticaal: ROSI — rendement tegenover kosten", "en": "Vertical: ROSI — return against cost" },
  "extract.metricRelevance": { "nl": "Relevantie", "en": "Relevance" },
  "extract.metricRosi": { "nl": "ROSI", "en": "ROSI" },
  "extract.metricGap": { "nl": "RV-gap", "en": "RV gap" },

  "diagram.heading": { "nl": "Een interactief kwadrant", "en": "An interactive quadrant" },
  "diagram.hint": { "nl": "Klik op een lijn, bolletje of tekst hieronder voor meer uitleg over dat type DV.", "en": "Click a line, dot or label below to read more about that DV type." },

  "about.heading": { "nl": "Wat is Dual Vulnerabilities?", "en": "What is Dual Vulnerabilities?" },
  "about.intro": { "nl": "De meeste organisaties behandelen cyberrisico als een 'whack-a-mole'-spel: kwetsbaarheden worden één voor één gepatcht, los van elkaar. Maar risico's staan niet op zichzelf — ze wisselwerken en kunnen samen een veel grotere, niet-lineaire impact veroorzaken dan de som van de losse delen.", "en": "Most organizations treat cyber risk as a game of whack-a-mole: vulnerabilities get patched one by one, in isolation. But risks don't exist in isolation — they interact, and together can cause a much larger, non-linear impact than the sum of their parts." },
  "about.sub1": { "nl": "Het dual vulnerability-concept", "en": "The dual vulnerability concept" },
  "about.text1": { "nl": "Een dual vulnerability ontstaat wanneer twee dimensies tegelijk beoordeeld worden: het doctrinal model van beveiliging (het beleid, de principes en het bedoelde controlemodel) en de operationele realiteit (hoe beveiliging in de praktijk daadwerkelijk werkt). Wanneer deze twee niet op elkaar aansluiten, ontstaan er blinde vlekken in governance en neemt risico niet lineair, maar exponentieel toe.", "en": "A dual vulnerability arises when two dimensions are assessed together: the doctrinal model of security (the policy, principles and intended control model) and the operational reality (how security actually works in practice). When the two don't align, governance blind spots emerge and risk grows not linearly, but exponentially." },
  "about.sub2": { "nl": "Twee assen", "en": "Two axes" },
  "about.text2": { "nl": "Dit model gebruikt twee assen om patronen te herkennen. De knowing-doing as: organisaties weten vaak wat er moet gebeuren, maar vertalen die kennis niet naar actie (Pfeffer & Sutton, 2000; toegepast op digitale beveiliging door Bobbert & Derksen, 2025). De doctrinal-material as: het verschil tussen de formele strategie of het beleid (doctrinal) en hoe beveiliging daadwerkelijk functioneert (material/operationeel).", "en": "This model uses two axes to recognize patterns. The knowing-doing axis: organizations often know what needs to happen, but fail to translate that knowledge into action (Pfeffer & Sutton, 2000; applied to digital security by Bobbert & Derksen, 2025). The doctrinal-material axis: the gap between formal strategy or policy (doctrinal) and how security actually functions in practice (material/operational)." },
  "about.sub3": { "nl": "Vier patronen", "en": "Four patterns" },
  "about.text3": { "nl": "De combinatie van beide assen levert het kwadrant op dat je op deze pagina ziet: Strategy → Leadership, Strategy → Execution, Expertise → Leadership en Expertise → Execution. Klik op een van de lijnen in het kwadrant om per patroon een uitleg te lezen.", "en": "Combining both axes produces the quadrant shown on this page: Strategy → Leadership, Strategy → Execution, Expertise → Leadership and Expertise → Execution. Click one of the lines in the quadrant to read an explanation per pattern." },
  "about.sub4": { "nl": "De onderzoeksbasis", "en": "The research basis" },
  "about.text4": { "nl": "Dit model is onderdeel van een scriptie van Joost Storms en Teunis Human aan Antwerp Management School, onder begeleiding van prof. dr. Yuri Bobbert. De 16 gedocumenteerde databreach-cases in deze tool zijn onderdeel van dat onderzoek.", "en": "This model is part of a thesis by Joost Storms and Teunis Human at Antwerp Management School, supervised by prof. dr. Yuri Bobbert. The 16 documented data-breach cases in this tool are part of that research." },

  "dataset.heading": { "nl": "De EuRepoC-dataset", "en": "The EuRepoC dataset" },
  "dataset.intro": { "nl": "De European Repository of Cyber Incidents (EuRepoC) is gebruikt als bron voor de scenario's in deze tool.", "en": "The European Repository of Cyber Incidents (EuRepoC) was used as the source for the scenarios in this tool." },
  "dataset.sub1": { "nl": "Wat de dataset bevat", "en": "What the dataset contains" },
  "dataset.text1": { "nl": "EuRepoC is een interdisciplinair, door experts in politiek, recht en technologie samengesteld archief van cyberincidenten. De gearchiveerde Zenodo-release (v1.3.2) bevat 3.416 incidenten tussen 1 januari 2000 en 31 december 2024, gecodeerd op 60 variabelen en onderbouwd met meer dan 220 bronnen; het live dashboard groeit continu door boven op die momentopname.", "en": "EuRepoC is an interdisciplinary archive of cyber incidents compiled by experts in politics, law and technology. The archived Zenodo release (v1.3.2) contains 3,416 incidents between January 1, 2000 and December 31, 2024, coded across 60 variables and drawing on more than 220 sources; the live dashboard keeps growing beyond that snapshot." },
  "dataset.sub2": { "nl": "Reikwijdte van de dataset", "en": "Scope of the dataset" },
  "dataset.text2": { "nl": "De dataset registreert cyberincidenten met een politieke dimensie — inclusief incidenten die nog niet gepolitiseerd zijn of waarvan geen politieke motivatie of afkomst van de aanvaller is vastgesteld. Per incident worden onder meer initiator- en doelland, betrokken dreigingsgroepen, sector, aanvalstype, attributie, respons en intensiteit vastgelegd.", "en": "The dataset records cyber incidents with a political dimension — including incidents that have not yet been politicized or where no political motivation or attacker affiliation has been established. Per incident it tracks, among other things, initiator and target country, threat groups involved, sector, incident type, attribution, response and intensity." },
  "dataset.sub3": { "nl": "Onze selectie", "en": "Our selection" },
  "dataset.text3": { "nl": "Voor de scenario's in deze tool is de dataset verder afgebakend: alleen incidenten waarvan het doelwit geen overheidsinstelling is, beperkt tot de sectoren kritieke infrastructuur en bedrijfsleven (corporate targets). Binnen die selectie zijn de 100 zwaarst wegende incidenten gebruikt als basis voor de scenario's.", "en": "For the scenarios in this tool, the dataset was narrowed further: only incidents where the target is not a state institution, limited to the critical-infrastructure and corporate-target sectors. Within that selection, the 100 highest-weighted incidents were used as the basis for the scenarios." },
  "dataset.sub4": { "nl": "Bron", "en": "Source" },
  "dataset.text4": { "nl": "Zettl-Schabath, Bund, Müller e.a. (2025). Global Dataset of Cyber Incidents (v1.3.2) [dataset]. European Repository of Cyber Incidents. Gepubliceerd onder CC BY-NC 4.0.", "en": "Zettl-Schabath, Bund, Müller et al. (2025). Global Dataset of Cyber Incidents (v1.3.2) [dataset]. European Repository of Cyber Incidents. Published under CC BY-NC 4.0." },
  "dataset.sourceLink": { "nl": "Bekijk op Zenodo (DOI: 10.5281/zenodo.14965395)", "en": "View on Zenodo (DOI: 10.5281/zenodo.14965395)" },

  "tooltip.doctrinal": { "nl": "De formele strategie, het beleid en de bedoelde manier van werken.", "en": "The formal strategy, policy and intended way of working." },
  "tooltip.material": { "nl": "Hoe het werk in de praktijk daadwerkelijk gebeurt.", "en": "How the work actually happens in practice." },
  "tooltip.knowing": { "nl": "Wat je organisatie weet of zou moeten weten.", "en": "What your organization knows or should know." },
  "tooltip.doing": { "nl": "Wat je organisatie daadwerkelijk doet.", "en": "What your organization actually does." },
  "tooltip.dvConfidence": { "nl": "Hoe zeker de onderzoekers zijn dat dit patroon de juiste classificatie is voor deze case.", "en": "How confident the researchers are that this pattern is the right classification for this case." },
  "tooltip.knowingDoingAxis": { "nl": "Meet het verschil tussen wat je organisatie weet en wat ze daadwerkelijk doet.", "en": "Measures the gap between what your organization knows and what it actually does." },
  "tooltip.doctrinalMaterialAxis": { "nl": "Meet het verschil tussen het formele beleid en de operationele praktijk.", "en": "Measures the gap between formal policy and operational practice." },
  "tooltip.benefit": { "nl": "Wat levert het op als je dit patroon binnen jouw organisatie aanpakt?", "en": "What do you gain by addressing this pattern within your organization?" },
  "tooltip.cost": { "nl": "Wat kost het aan geld, tijd en verandercapaciteit om dit aan te pakken?", "en": "What does it cost in money, time and change capacity to address this?" },
  "tooltip.markerDynamics": { "nl": "Hoe snel verandert het risico achter deze marker — dreiging, techniek, afhankelijkheden?", "en": "How fast does the risk behind this marker change — threat, technology, dependencies?" },
  "tooltip.mgmtDynamics": { "nl": "Hoe snel kan jouw aansturing daar daadwerkelijk op reageren — besluiten, bijsturen, doorvoeren?", "en": "How fast can your management actually respond — decide, adjust, implement?" },
  "tooltip.rosi": { "nl": "Return on security investment: de baat van aanpakken afgezet tegen de kosten, herschaald naar 1-5.", "en": "Return on security investment: the benefit of addressing it against the cost, rescaled to 1-5." },
  "tooltip.ashby": { "nl": "Ashby's law of requisite variety: als het risico sneller verandert dan de aansturing kan reageren, ontstaat er een tekort. Positief = tekort = urgent.", "en": "Ashby's law of requisite variety: when risk changes faster than management can respond, a shortfall appears. Positive = shortfall = urgent." },
  "tooltip.relevanceMetric": { "nl": "Gemiddelde van de twee reflectievragen: hoe herkenbaar is dit patroon binnen jouw organisatie?", "en": "Mean of the two reflection questions: how recognizable is this pattern within your organization?" },

  "case.breachType": { "nl": "Breach type", "en": "Breach type" },
  "case.confidence": { "nl": "DV-confidence", "en": "DV confidence" },
  "case.rationale": { "nl": "Onderbouwing", "en": "Rationale" },
  "case.notes": { "nl": "Notitie", "en": "Note" },
  "case.sources": { "nl": "Bronnen", "en": "Sources" },

  "relevance.axis.knowingDoing": { "nl": "Knowing–doing", "en": "Knowing–doing" },
  "relevance.axis.doctrinalMaterial": { "nl": "Doctrinal–material", "en": "Doctrinal–material" },
  "relevance.gaugeBand1": { "nl": "Geen kans", "en": "No chance" },
  "relevance.gaugeBand2": { "nl": "Klein", "en": "Minor" },
  "relevance.gaugeBand3": { "nl": "Gemiddeld", "en": "Moderate" },
  "relevance.gaugeBand4": { "nl": "Aanzienlijk", "en": "Significant" },
  "relevance.gaugeBand5": { "nl": "Grote kans", "en": "High chance" },
  "relevance.gaugeText1": { "nl": "Dit patroon lijkt vrijwel niet aanwezig binnen jouw organisatie.", "en": "This pattern seems virtually absent within your organization." },
  "relevance.gaugeText2": { "nl": "Dit patroon lijkt slechts in beperkte mate herkenbaar binnen jouw organisatie.", "en": "This pattern seems only slightly recognizable within your organization." },
  "relevance.gaugeText3": { "nl": "Er zijn herkenbare raakvlakken met jouw organisatie.", "en": "There are recognizable overlaps with your organization." },
  "relevance.gaugeText4": { "nl": "Dit patroon komt sterk overeen met de situatie binnen jouw organisatie.", "en": "This pattern strongly matches the situation within your organization." },
  "relevance.gaugeText5": { "nl": "Dit patroon is zeer herkenbaar en verdient directe aandacht binnen jouw organisatie.", "en": "This pattern is highly recognizable and deserves immediate attention within your organization." },

  "footer.text": { "nl": "Dual Vulnerabilities · Antwerp Management School · onderzoek naar systemisch cyberrisico", "en": "Dual Vulnerabilities · Antwerp Management School · systemic cyber-risk research" },

  "lang.switchLabel": { "nl": "Taal", "en": "Language" }
};
