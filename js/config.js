/**
 * Layout + weighted-scoring logic. No editable content lives here —
 * see data/content.js for questions, weights, scenarios and outcomes.
 */
(function (KDQ) {
  'use strict';

  /**
   * Endpoint coordinates in the 1100x820 SVG viewBox. Each quadrant
   * cell holds 2 points (an "outer" one near the cell's outside edge,
   * an "inner" one near the centre cross) so that when all 4
   * relationships are drawn at once (the legend) their dots don't
   * land on top of each other — a straight relationship (leadership,
   * expertise-execution) runs outer-to-outer down one column; a
   * diagonal one (execution, expertise-leadership) runs inner-to-inner
   * through the centre.
   */
  KDQ.POSITIONS = {
    leadershipTop: { x: 332, y: 276 },
    leadershipBottom: { x: 332, y: 584 },
    executionTop: { x: 512, y: 276 },
    executionBottom: { x: 709, y: 584 },
    expertiseLeadershipTop: { x: 709, y: 276 },
    expertiseLeadershipBottom: { x: 512, y: 584 },
    expertiseExecutionTop: { x: 889, y: 276 },
    expertiseExecutionBottom: { x: 889, y: 584 }
  };

  KDQ.getScenarios = function () {
    return KDQ.CONTENT.scenarios;
  };

  KDQ.getMarker = function (code) {
    return KDQ.CONTENT.markers[code];
  };

  /**
   * Every real risk-marker code, in taxonomy order. "X" is excluded:
   * it means no marker was evidenced, so it is never something to
   * filter on or score. Read from the data rather than hardcoded, so
   * extending the taxonomy only means editing data/content.js.
   */
  KDQ.getMarkerCodes = function () {
    return Object.keys(KDQ.CONTENT.markers).filter(function (code) { return code !== 'X'; });
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

})(window.KDQ = window.KDQ || {});
