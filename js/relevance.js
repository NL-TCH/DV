/**
 * RelevanceEngine/RelevanceView run a short question-by-question
 * self-assessment derived from a scenario's risk markers: two
 * questions per marker (knowing-doing, doctrinal-material), each
 * rated 1-5. Mirrors QuizEngine/QuizView's shape and flow.
 */
(function (KDQ) {
  'use strict';

  var SCALE_VALUES = [1, 2, 3, 4, 5];

  function RelevanceEngine() {
    this.questions = [];
    this.index = 0;
    this.answers = {};
  }

  /** Primary + secondary markers, deduplicated, "X" (no DV evidenced) excluded — "X" has no questions to ask. */
  RelevanceEngine.prototype.loadScenario = function (scenario) {
    var codes = [scenario.primaryMarker].concat(scenario.secondaryMarkers || []);
    var uniqueCodes = [];
    codes.forEach(function (code) {
      if (code && code !== 'X' && uniqueCodes.indexOf(code) === -1) uniqueCodes.push(code);
    });

    var questions = [];
    uniqueCodes.forEach(function (code) {
      var marker = KDQ.getMarker(code);
      if (!marker || !marker.knowingDoingQuestion) return;
      questions.push({ id: code + '-kd', markerCode: code, axisKey: 'relevance.axis.knowingDoing', axisTooltipKey: 'tooltip.knowingDoingAxis', text: marker.knowingDoingQuestion });
      questions.push({ id: code + '-dm', markerCode: code, axisKey: 'relevance.axis.doctrinalMaterial', axisTooltipKey: 'tooltip.doctrinalMaterialAxis', text: marker.doctrinalMaterialQuestion });
    });

    this.questions = questions;
    this.index = 0;
    this.answers = {};
  };

  RelevanceEngine.prototype.hasQuestions = function () {
    return this.questions.length > 0;
  };

  RelevanceEngine.prototype.currentQuestion = function () {
    return this.questions[this.index];
  };

  RelevanceEngine.prototype.currentAnswer = function () {
    return this.answers[this.currentQuestion().id];
  };

  RelevanceEngine.prototype.select = function (value) {
    this.answers[this.currentQuestion().id] = value;
  };

  RelevanceEngine.prototype.isFirst = function () {
    return this.index === 0;
  };

  RelevanceEngine.prototype.isLast = function () {
    return this.index === this.questions.length - 1;
  };

  RelevanceEngine.prototype.canAdvance = function () {
    return !!this.currentAnswer();
  };

  RelevanceEngine.prototype.goNext = function () {
    if (!this.isLast()) this.index += 1;
  };

  RelevanceEngine.prototype.goBack = function () {
    if (!this.isFirst()) this.index -= 1;
  };

  RelevanceEngine.prototype.average = function () {
    var self = this;
    var ids = Object.keys(this.answers);
    var total = ids.reduce(function (sum, id) { return sum + self.answers[id]; }, 0);
    return total / ids.length;
  };

  /** Average of the 2 answers (knowing-doing, doctrinal-material) per marker, in question order. */
  RelevanceEngine.prototype.perMarkerScores = function () {
    var self = this;
    var groups = {};
    var order = [];

    this.questions.forEach(function (question) {
      var value = self.answers[question.id];
      if (value == null) return;
      if (!groups[question.markerCode]) {
        groups[question.markerCode] = [];
        order.push(question.markerCode);
      }
      groups[question.markerCode].push(value);
    });

    return order.map(function (code) {
      var values = groups[code];
      var total = values.reduce(function (sum, v) { return sum + v; }, 0);
      return { markerCode: code, average: total / values.length };
    });
  };

  function RelevanceView(engine, dom) {
    this.engine = engine;
    this.dom = dom;
    this.onComplete = null;

    this.dom.btnNext.addEventListener('click', this._handleNext.bind(this));
    this.dom.btnBack.addEventListener('click', this._handleBack.bind(this));
  }

  RelevanceView.prototype._handleNext = function () {
    if (!this.engine.canAdvance()) return;
    if (this.engine.isLast()) {
      if (typeof this.onComplete === 'function') this.onComplete();
      return;
    }
    this.engine.goNext();
    this.render();
  };

  RelevanceView.prototype._handleBack = function () {
    this.engine.goBack();
    this.render();
  };

  RelevanceView.prototype.render = function () {
    var engine = this.engine;
    var dom = this.dom;
    var question = engine.currentQuestion();
    var marker = KDQ.getMarker(question.markerCode);
    var total = engine.questions.length;
    var stepNumber = engine.index + 1;

    dom.stepLabel.textContent = KDQ.i18n.t('step.counter') + ' 0' + stepNumber + ' — 0' + total;
    dom.progressFill.style.width = (stepNumber / total * 100) + '%';
    dom.questionMeta.innerHTML = question.markerCode + ' — ' + marker.label + ' · ' +
      '<span class="has-tooltip" title="' + KDQ.i18n.t(question.axisTooltipKey) + '">' + KDQ.i18n.t(question.axisKey) + '</span>';
    dom.questionText.textContent = KDQ.i18n.tr(question.text);

    var selected = engine.currentAnswer();
    dom.scale.innerHTML = '';

    SCALE_VALUES.forEach(function (value) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'relevance-scale-btn' + (selected === value ? ' selected' : '');
      btn.textContent = String(value);
      btn.addEventListener('click', function () {
        engine.select(value);
        this.render();
      }.bind(this));
      dom.scale.appendChild(btn);
    }, this);

    dom.btnBack.disabled = engine.isFirst();
    dom.btnNext.disabled = !engine.canAdvance();
    dom.btnBack.textContent = KDQ.i18n.t('nav.back');
    dom.btnNext.textContent = engine.isLast() ? KDQ.i18n.t('nav.seeResult') : KDQ.i18n.t('nav.next');
  };

  // ---- gauge: renders the average score (1-5) as a needle on a half-circle dial ----

  var SVG_NS = 'http://www.w3.org/2000/svg';
  var GAUGE_CENTER = 150;
  var GAUGE_RADIUS = 120;
  var GAUGE_BAND_WIDTH = 22;

  // 5 equal bands spanning the 1-5 range, light (unlikely) to dark/red (likely).
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

  KDQ.RelevanceEngine = RelevanceEngine;
  KDQ.RelevanceView = RelevanceView;

})(window.KDQ = window.KDQ || {});
