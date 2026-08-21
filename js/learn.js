/**
 * LearnEngine + LearnView drive the "Learn" stage: per risk marker of
 * the selected breach the user scores six 1-5 values, grouped in three
 * blocks (mirroring the sketch):
 *
 * - Reflect/contextualize: the marker's knowing-doing and
 *   doctrinal-material questions -> how relevant is this pattern here.
 * - Business case: benefit and cost of addressing it -> ROSI.
 * - Urgency: how fast the marker's risk moves vs. how fast management
 *   can respond -> an Ashby requisite-variety gap.
 *
 * Those six raw scores are what the Extract stage turns into a ranked
 * lessons-learned report and the bubble chart, so the derived measures
 * (relevance / rosi / ashbyGap / urgency / priority) all live here.
 */
(function (KDQ) {
  'use strict';

  var SCALE_VALUES = [1, 2, 3, 4, 5];

  // Every field is scored 1-5; "block" groups them for rendering.
  var FIELDS = [
    { key: 'kd', block: 'reflect', labelKey: 'relevance.axis.knowingDoing', tooltipKey: 'tooltip.knowingDoingAxis', question: 'knowingDoingQuestion' },
    { key: 'dm', block: 'reflect', labelKey: 'relevance.axis.doctrinalMaterial', tooltipKey: 'tooltip.doctrinalMaterialAxis', question: 'doctrinalMaterialQuestion' },
    { key: 'benefit', block: 'business', labelKey: 'learn.benefit', tooltipKey: 'tooltip.benefit' },
    { key: 'cost', block: 'business', labelKey: 'learn.cost', tooltipKey: 'tooltip.cost' },
    { key: 'markerDynamics', block: 'dynamics', labelKey: 'learn.markerDynamics', tooltipKey: 'tooltip.markerDynamics' },
    { key: 'mgmtDynamics', block: 'dynamics', labelKey: 'learn.mgmtDynamics', tooltipKey: 'tooltip.mgmtDynamics' }
  ];

  var BLOCKS = [
    { key: 'reflect', headingKey: 'learn.reflectHeading' },
    { key: 'business', headingKey: 'learn.businessHeading' },
    { key: 'dynamics', headingKey: 'learn.dynamicsHeading' }
  ];

  /** Linearly maps a value from one range onto another. */
  function rescale(value, fromMin, fromMax, toMin, toMax) {
    return toMin + (value - fromMin) / (fromMax - fromMin) * (toMax - toMin);
  }

  function LearnEngine() {
    this.scenario = null;
    this.markerCodes = [];
    this.scores = {};
  }

  /** Primary + secondary markers, deduplicated; "X" (no DV evidenced) has no questions, so it's skipped. */
  LearnEngine.prototype.loadScenario = function (scenario) {
    var codes = [scenario.primaryMarker].concat(scenario.secondaryMarkers || []);
    var unique = [];
    codes.forEach(function (code) {
      if (!code || code === 'X' || unique.indexOf(code) !== -1) return;
      var marker = KDQ.getMarker(code);
      if (marker && marker.knowingDoingQuestion) unique.push(code);
    });

    this.scenario = scenario;
    this.markerCodes = unique;
    this.scores = {};
    unique.forEach(function (code) { this.scores[code] = {}; }, this);
  };

  LearnEngine.prototype.hasMarkers = function () {
    return this.markerCodes.length > 0;
  };

  LearnEngine.prototype.setScore = function (code, field, value) {
    if (!this.scores[code]) this.scores[code] = {};
    this.scores[code][field] = value;
  };

  LearnEngine.prototype.getScore = function (code, field) {
    return this.scores[code] ? this.scores[code][field] : undefined;
  };

  LearnEngine.prototype.isMarkerComplete = function (code) {
    return FIELDS.every(function (field) { return this.getScore(code, field.key) != null; }, this);
  };

  LearnEngine.prototype.completedCount = function () {
    return this.markerCodes.filter(this.isMarkerComplete, this).length;
  };

  LearnEngine.prototype.isComplete = function () {
    return this.hasMarkers() && this.completedCount() === this.markerCodes.length;
  };

  /**
   * Derived measures for one marker, all normalised to a 1-5 scale so
   * they can share the chart's axes:
   * - relevance: mean of the two reflection answers.
   * - rosi: benefit against cost (benefit-cost spans -4..+4 -> 1..5).
   * - ashbyGap: marker dynamics minus management dynamics (-4..+4).
   *   Positive means the risk moves faster than management can answer:
   *   a requisite-variety shortfall, so more urgent.
   * - priority: what the Extract stage ranks lessons by.
   */
  LearnEngine.prototype.markerResult = function (code) {
    var kd = this.getScore(code, 'kd');
    var dm = this.getScore(code, 'dm');
    var benefit = this.getScore(code, 'benefit');
    var cost = this.getScore(code, 'cost');
    var markerDyn = this.getScore(code, 'markerDynamics');
    var mgmtDyn = this.getScore(code, 'mgmtDynamics');

    var relevance = (kd + dm) / 2;
    var rosi = rescale(benefit - cost, -4, 4, 1, 5);
    var ashbyGap = markerDyn - mgmtDyn;
    var urgency = rescale(ashbyGap, -4, 4, 1, 5);
    var priority = relevance * 0.4 + urgency * 0.4 + rosi * 0.2;

    return {
      markerCode: code,
      relevance: relevance,
      rosi: rosi,
      ashbyGap: ashbyGap,
      urgency: urgency,
      priority: priority
    };
  };

  /** Completed markers only, most urgent/relevant first — the Extract stage's ranking. */
  LearnEngine.prototype.results = function () {
    return this.markerCodes
      .filter(this.isMarkerComplete, this)
      .map(this.markerResult, this)
      .sort(function (a, b) { return b.priority - a.priority; });
  };

  /** Mean relevance across scored markers — the breach's contextual relevance (1-5). */
  LearnEngine.prototype.overallRelevance = function () {
    var results = this.results();
    if (!results.length) return 0;
    var total = results.reduce(function (sum, item) { return sum + item.relevance; }, 0);
    return total / results.length;
  };

  /** A row of five 1-5 buttons; calls onSelect(value) on click. */
  function buildScaleRow(selected, onSelect) {
    var row = document.createElement('div');
    row.className = 'learn-scale';

    SCALE_VALUES.forEach(function (value) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'learn-scale-btn' + (selected === value ? ' selected' : '');
      btn.textContent = String(value);
      btn.addEventListener('click', function () { onSelect(value); });
      row.appendChild(btn);
    });

    return row;
  }

  function LearnView(engine, dom) {
    this.engine = engine;
    this.dom = dom;
    this.onChange = null;
  }

  LearnView.prototype.render = function () {
    var self = this;
    var engine = this.engine;

    this.dom.progress.textContent = KDQ.i18n.t('learn.progress')
      .replace('{done}', engine.completedCount())
      .replace('{total}', engine.markerCodes.length);

    this.dom.container.innerHTML = '';

    if (!engine.hasMarkers()) {
      var empty = document.createElement('p');
      empty.className = 'stage-empty';
      empty.textContent = KDQ.i18n.t('learn.noMarkers');
      this.dom.container.appendChild(empty);
      return;
    }

    engine.markerCodes.forEach(function (code) {
      self.dom.container.appendChild(self._buildMarkerCard(code));
    });
  };

  LearnView.prototype._buildMarkerCard = function (code) {
    var self = this;
    var marker = KDQ.getMarker(code);
    var card = document.createElement('div');
    card.className = 'learn-card' + (this.engine.isMarkerComplete(code) ? ' complete' : '');

    var header = document.createElement('div');
    header.className = 'learn-card-header';
    header.innerHTML =
      '<span class="learn-card-code">' + code + '</span>' +
      '<span class="learn-card-label">' + marker.label + '</span>';
    card.appendChild(header);

    var definition = document.createElement('p');
    definition.className = 'learn-card-def';
    definition.textContent = KDQ.i18n.tr(marker.definition);
    card.appendChild(definition);

    var legend = document.createElement('p');
    legend.className = 'learn-card-legend';
    legend.textContent = KDQ.i18n.t('learn.scaleLegend');
    card.appendChild(legend);

    BLOCKS.forEach(function (block) {
      card.appendChild(self._buildBlock(code, marker, block));
    });

    return card;
  };

  LearnView.prototype._buildBlock = function (code, marker, block) {
    var self = this;
    var wrap = document.createElement('div');
    wrap.className = 'learn-block';

    var heading = document.createElement('p');
    heading.className = 'learn-block-heading';
    heading.textContent = KDQ.i18n.t(block.headingKey);
    wrap.appendChild(heading);

    FIELDS.filter(function (field) { return field.block === block.key; }).forEach(function (field) {
      var row = document.createElement('div');
      row.className = 'learn-field';

      // The reflection fields ask the marker's own research question,
      // tagged with the DV axis it probes; the business/dynamics fields
      // are generic 1-5 judgements.
      var label = document.createElement('span');
      label.className = 'learn-field-label';

      var text = document.createElement('span');
      text.className = 'has-tooltip';
      text.title = KDQ.i18n.t(field.tooltipKey);
      text.textContent = field.question
        ? KDQ.i18n.tr(marker[field.question])
        : KDQ.i18n.t(field.labelKey);

      if (field.question) {
        var axis = document.createElement('span');
        axis.className = 'learn-field-axis';
        axis.textContent = KDQ.i18n.t(field.labelKey);
        label.appendChild(axis);
      }
      label.appendChild(text);
      row.appendChild(label);

      row.appendChild(buildScaleRow(self.engine.getScore(code, field.key), function (value) {
        self.engine.setScore(code, field.key, value);
        self.render();
        if (typeof self.onChange === 'function') self.onChange();
      }));

      wrap.appendChild(row);
    });

    return wrap;
  };

  KDQ.LearnEngine = LearnEngine;
  KDQ.LearnView = LearnView;
  KDQ.buildScaleRow = buildScaleRow;

})(window.KDQ = window.KDQ || {});
