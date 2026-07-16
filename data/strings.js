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

  "scenario.heading": { "nl": "Een gedocumenteerde databreach-case", "en": "A documented data-breach case" },
  "scenario.hint": { "nl": "16 gedocumenteerde databreaches — kies er één.", "en": "16 documented data breaches — pick one." },
  "scenario.placeholder": { "nl": "Kies een gedocumenteerde databreach-case…", "en": "Pick a documented data-breach case…" },

  "or-divider": { "nl": "of", "en": "or" },

  "diagram.heading": { "nl": "Een interactief kwadrant", "en": "An interactive quadrant" },
  "diagram.hint": { "nl": "Klik op een lijn, bolletje of tekst hieronder voor meer uitleg over dat type DV.", "en": "Click a line, dot or label below to read more about that DV type." },

  "tabs.start": { "nl": "Start", "en": "Start" },
  "tabs.about": { "nl": "Over DV", "en": "About DV" },

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

  "quiz.heading": { "nl": "De zelfscan", "en": "The self-scan" },
  "quiz.hint": { "nl": "Vier korte vragen over jouw team.", "en": "Four short questions about your team." },

  "nav.back": { "nl": "Vorige", "en": "Previous" },
  "nav.next": { "nl": "Volgende", "en": "Next" },
  "nav.seeResult": { "nl": "Bekijk resultaat", "en": "View result" },
  "step.counter": { "nl": "VRAAG", "en": "QUESTION" },

  "result.restart": { "nl": "Opnieuw beginnen", "en": "Start over" },

  "answers.quizSource": { "nl": "Jouw antwoorden", "en": "Your answers" },
  "answers.scenarioSourcePrefix": { "nl": "Onderzochte case — ", "en": "Researched case — " },

  "case.breachType": { "nl": "Breach type", "en": "Breach type" },
  "case.confidence": { "nl": "DV-confidence", "en": "DV confidence" },
  "case.markers": { "nl": "Risicomarkers", "en": "Risk markers" },
  "case.summary": { "nl": "Samenvatting", "en": "Summary" },
  "case.rationale": { "nl": "Onderbouwing", "en": "Rationale" },
  "case.notes": { "nl": "Notitie", "en": "Note" },
  "case.sources": { "nl": "Bronnen", "en": "Sources" },

  "group.none": { "nl": "Geen DV aangetoond (contrastcases)", "en": "No DV evidenced (contrast cases)" },

  "relevance.heading": { "nl": "Toets de relevantie voor jouw organisatie", "en": "Test the relevance for your organization" },
  "relevance.hint": { "nl": "Hoe groot is de kans dat dit ook bij jouw organisatie kan gebeuren (of al gebeurt)?", "en": "How likely is it that this could also happen at your organization (or already is)?" },
  "relevance.startButton": { "nl": "Test de relevantie voor jouw organisatie", "en": "Test the relevance for your organization" },
  "relevance.backToResult": { "nl": "Terug naar case-resultaat", "en": "Back to case result" },
  "relevance.axis.knowingDoing": { "nl": "Knowing–doing", "en": "Knowing–doing" },
  "relevance.axis.doctrinalMaterial": { "nl": "Doctrinal–material", "en": "Doctrinal–material" },
  "relevance.scaleLow": { "nl": "Zeer onwaarschijnlijk", "en": "Very unlikely" },
  "relevance.scaleHigh": { "nl": "Zeer waarschijnlijk", "en": "Very likely" },
  "relevance.scoreLabel": { "nl": "Jouw relevantie-score", "en": "Your relevance score" },
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
