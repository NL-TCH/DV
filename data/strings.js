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
  "meta.title": { "nl": "Dual Vulnerabilities — kennis-doen kwadrant", "en": "Dual Vulnerabilities — knowing-doing quadrant" },

  "hero.eyebrow": { "nl": "Een interactieve zelfscan", "en": "An interactive self-scan" },
  "hero.title": { "nl": "Dual Vulnerabilities", "en": "Dual Vulnerabilities" },
  "hero.subtitle": { "nl": "Een systemische cyberrisico-lens voor leergerichte post-mortem breach-analyse.", "en": "A systemic cyber-risk lens for learning-oriented post-mortem breach analysis." },

  "step1.label": { "nl": "Stap 1 — lees eerst een onderzochte case", "en": "Step 1 — read a researched case first" },
  "step1.hint": { "nl": "Kies een van de 16 gedocumenteerde databreaches uit ons onderzoek. De bijbehorende relatie verschijnt direct in het kwadrant.", "en": "Pick one of the 16 documented data breaches from our research. The matching relationship appears in the quadrant immediately." },
  "scenario.placeholder": { "nl": "Kies een gedocumenteerde databreach-case…", "en": "Pick a documented data-breach case…" },

  "or-divider": { "nl": "je hoeft maar één van beide te doen", "en": "you only need to do one of the two" },

  "step2.label": { "nl": "Stap 2 — of beantwoord zelf de vragen", "en": "Step 2 — or answer the questions yourself" },
  "step2.hint": { "nl": "Vul de zelfscan in over je eigen team of situatie.", "en": "Fill in the self-scan for your own team or situation." },

  "nav.back": { "nl": "Vorige", "en": "Previous" },
  "nav.next": { "nl": "Volgende", "en": "Next" },
  "nav.seeResult": { "nl": "Bekijk resultaat", "en": "View result" },
  "step.counter": { "nl": "VRAAG", "en": "QUESTION" },

  "result.tagline": { "nl": "Resultaat", "en": "Result" },
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

  "footer.text": { "nl": "Dual Vulnerabilities · Antwerp Management School · onderzoek naar systemisch cyberrisico", "en": "Dual Vulnerabilities · Antwerp Management School · systemic cyber-risk research" },

  "lang.switchLabel": { "nl": "Taal", "en": "Language" }
};
