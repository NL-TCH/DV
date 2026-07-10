/**
 * Layout + weighted-scoring logic. No editable content lives here —
 * see data/content.js for questions, weights, scenarios and outcomes.
 */
(function (KDQ) {
  'use strict';

  // Centre point of each quadrant cell in the 1100x820 SVG viewBox.
  KDQ.POSITIONS = {
    knowingDoctrinal: { x: 422, y: 276 },
    knowingMaterial: { x: 799, y: 276 },
    doingDoctrinal: { x: 422, y: 584 },
    doingMaterial: { x: 799, y: 584 }
  };

  KDQ.getQuestions = function () {
    return KDQ.CONTENT.questions;
  };

  KDQ.getScenarios = function () {
    return KDQ.CONTENT.scenarios;
  };

  KDQ.getMarker = function (code) {
    return KDQ.CONTENT.markers[code];
  };

  KDQ.getRelationship = function (key) {
    var rel = KDQ.CONTENT.relationships[key];
    return {
      key: key,
      label: rel.label,
      title: rel.title,
      text: rel.text,
      color: rel.color,
      dash: !!rel.dash,
      from: rel.from ? KDQ.POSITIONS[rel.from] : null,
      to: rel.to ? KDQ.POSITIONS[rel.to] : null
    };
  };

  // "none" ("no DV evidenced") is a scenario-only outcome — it has no
  // weights and can never be produced by the quiz's scoring.
  function scorableOutcomeKeys() {
    return Object.keys(KDQ.CONTENT.relationships).filter(function (key) { return key !== 'none'; });
  }

  /**
   * answers: { [questionId]: optionValue }
   * Sums each selected option's "weights" per outcome key.
   */
  KDQ.computeScores = function (answers) {
    var scores = {};
    scorableOutcomeKeys().forEach(function (key) {
      scores[key] = 0;
    });

    KDQ.CONTENT.questions.forEach(function (question) {
      var chosenValue = answers[question.id];
      if (!chosenValue) return;

      var option = question.options.filter(function (o) { return o.value === chosenValue; })[0];
      if (!option || !option.weights) return;

      Object.keys(option.weights).forEach(function (outcomeKey) {
        scores[outcomeKey] = (scores[outcomeKey] || 0) + option.weights[outcomeKey];
      });
    });

    return scores;
  };

  /** Highest total score wins; ties go to the first outcome listed in relationships. */
  KDQ.resolveResultKey = function (answers) {
    var scores = KDQ.computeScores(answers);
    var bestKey = null;
    var bestScore = -Infinity;

    scorableOutcomeKeys().forEach(function (key) {
      if (scores[key] > bestScore) {
        bestScore = scores[key];
        bestKey = key;
      }
    });

    return bestKey;
  };

})(window.KDQ = window.KDQ || {});
