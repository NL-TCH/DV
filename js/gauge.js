/**
 * The half-circle relevance gauge: renders a 1-5 score as a needle on
 * a five-band dial, light (unlikely) to maroon (likely). Used by the
 * Extract stage for a breach's overall contextual relevance, and its
 * bands double as the priority colour scale for the lessons report and
 * the bubble chart.
 */
(function (KDQ) {
  'use strict';

  var SVG_NS = 'http://www.w3.org/2000/svg';
  var GAUGE_CENTER = 150;
  var GAUGE_RADIUS = 120;
  var GAUGE_BAND_WIDTH = 22;

  var GAUGE_BANDS = [
    { max: 1.8, color: '#dcdad6', labelKey: 'relevance.gaugeBand1', textKey: 'relevance.gaugeText1' },
    { max: 2.6, color: '#c7c4bf', labelKey: 'relevance.gaugeBand2', textKey: 'relevance.gaugeText2' },
    { max: 3.4, color: '#9a9a9a', labelKey: 'relevance.gaugeBand3', textKey: 'relevance.gaugeText3' },
    { max: 4.2, color: '#595959', labelKey: 'relevance.gaugeBand4', textKey: 'relevance.gaugeText4' },
    { max: 5.001, color: '#8c1f28', labelKey: 'relevance.gaugeBand5', textKey: 'relevance.gaugeText5' }
  ];
  var GAUGE_BAND_ANGLES = [180, 144, 108, 72, 36, 0];

  function polarToPoint(angleDeg, radius) {
    var rad = angleDeg * Math.PI / 180;
    return {
      x: GAUGE_CENTER + radius * Math.cos(rad),
      y: GAUGE_CENTER - radius * Math.sin(rad)
    };
  }

  function describeBandArc(startAngle, endAngle) {
    var start = polarToPoint(startAngle, GAUGE_RADIUS);
    var end = polarToPoint(endAngle, GAUGE_RADIUS);
    return 'M ' + start.x.toFixed(2) + ' ' + start.y.toFixed(2) +
      ' A ' + GAUGE_RADIUS + ' ' + GAUGE_RADIUS + ' 0 0 1 ' + end.x.toFixed(2) + ' ' + end.y.toFixed(2);
  }

  /** Maps a 1-5 score onto the dial's 180°(low)…0°(high) sweep. */
  function scoreToAngle(score) {
    var clamped = Math.min(5, Math.max(1, score));
    return 180 - (clamped - 1) / 4 * 180;
  }

  KDQ.getRelevanceBand = function (score) {
    for (var i = 0; i < GAUGE_BANDS.length; i++) {
      if (score <= GAUGE_BANDS[i].max) return GAUGE_BANDS[i];
    }
    return GAUGE_BANDS[GAUGE_BANDS.length - 1];
  };

  /** Builds the half-circle gauge SVG with a needle pointing at the given 1-5 score. */
  KDQ.buildRelevanceGauge = function (score) {
    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', '0 0 300 165');
    svg.setAttribute('class', 'relevance-gauge');

    GAUGE_BANDS.forEach(function (band, i) {
      var arc = document.createElementNS(SVG_NS, 'path');
      arc.setAttribute('d', describeBandArc(GAUGE_BAND_ANGLES[i], GAUGE_BAND_ANGLES[i + 1]));
      arc.setAttribute('fill', 'none');
      arc.setAttribute('stroke', band.color);
      arc.setAttribute('stroke-width', GAUGE_BAND_WIDTH);
      svg.appendChild(arc);
    });

    var tip = polarToPoint(scoreToAngle(score), GAUGE_RADIUS - GAUGE_BAND_WIDTH);
    var needle = document.createElementNS(SVG_NS, 'line');
    needle.setAttribute('x1', GAUGE_CENTER);
    needle.setAttribute('y1', GAUGE_CENTER);
    needle.setAttribute('x2', tip.x.toFixed(2));
    needle.setAttribute('y2', tip.y.toFixed(2));
    needle.setAttribute('stroke', 'var(--ink)');
    needle.setAttribute('stroke-width', 4);
    needle.setAttribute('stroke-linecap', 'round');
    svg.appendChild(needle);

    var pivot = document.createElementNS(SVG_NS, 'circle');
    pivot.setAttribute('cx', GAUGE_CENTER);
    pivot.setAttribute('cy', GAUGE_CENTER);
    pivot.setAttribute('r', 8);
    pivot.setAttribute('fill', 'var(--ink)');
    svg.appendChild(pivot);

    return svg;
  };

})(window.KDQ = window.KDQ || {});
