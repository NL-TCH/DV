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
  "relevance.hint": { "nl": "Hoe groot is de kans dat dit ook bij jouw organisatie kan gebeuren (of al gebeurt)? Je krijgt per risicomarker van deze case twee stellingen: één over de knowing-doing as en één over de doctrinal-material as.", "en": "How likely is it that this could also happen at your organization (or already is)? For each of this case's risk markers you'll get two statements: one about the knowing-doing axis and one about the doctrinal-material axis." },
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
