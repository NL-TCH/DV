/**
 * ExtractView renders the "Extract" stage: the lessons-learned report
 * synthesised from the Learn scores.
 *
 * Left, the breach's overall contextual relevance (a 1-5 gauge) plus
 * the markers ranked by priority — this is the prioritisation the tool
 * is ultimately for: which lesson to act on first.
 *
 * Right, the same markers as a bubble chart, so the trade-off behind
 * that ranking stays visible:
 * - x: the Ashby requisite-variety gap (marker dynamics minus
 *   management dynamics). Right of centre the risk moves faster than
 *   management can answer, so it is the urgent half.
 * - y: ROSI — return against cost of addressing the marker.
 * - bubble size: how relevant the marker is to this organisation.
 * Top-right therefore reads as "big return, and it cannot wait".
 */
(function (KDQ) {
  'use strict';

  var SVG_NS = 'http://www.w3.org/2000/svg';

  var CHART = {
    width: 460,
    height: 340,
    left: 62,
    right: 430,
    top: 24,
    bottom: 278
  };

  function scaleX(ashbyGap) {
    return CHART.left + (ashbyGap + 4) / 8 * (CHART.right - CHART.left);
  }

  function scaleY(rosi) {
    return CHART.bottom - (rosi - 1) / 4 * (CHART.bottom - CHART.top);
  }

  function bubbleRadius(relevance) {
    return 9 + (relevance - 1) / 4 * 19;
  }

  function svgEl(name, attrs) {
    var el = document.createElementNS(SVG_NS, name);
    Object.keys(attrs).forEach(function (key) { el.setAttribute(key, attrs[key]); });
    return el;
  }

  function ExtractView(dom) {
    this.container = dom.container;
    this.engine = null;
  }

  ExtractView.prototype.render = function (engine) {
    this.engine = engine;
    this.container.innerHTML = '';

    var results = engine.results();

    if (!results.length) {
      var empty = document.createElement('p');
      empty.className = 'stage-empty';
      empty.textContent = KDQ.i18n.t('extract.incomplete');
      this.container.appendChild(empty);
      return;
    }

    if (!engine.isComplete()) {
      var partial = document.createElement('p');
      partial.className = 'extract-partial';
      partial.textContent = KDQ.i18n.t('extract.partial')
        .replace('{done}', results.length)
        .replace('{total}', engine.markerCodes.length);
      this.container.appendChild(partial);
    }

    var grid = document.createElement('div');
    grid.className = 'extract-grid';
    grid.appendChild(this._buildReport(engine, results));
    grid.appendChild(this._buildChart(results));
    this.container.appendChild(grid);
  };

  ExtractView.prototype._buildReport = function (engine, results) {
    var column = document.createElement('div');
    column.className = 'extract-column';

    var relevance = engine.overallRelevance();
    var band = KDQ.getRelevanceBand(relevance);

    var relevanceHeading = document.createElement('p');
    relevanceHeading.className = 'understand-panel-heading';
    relevanceHeading.textContent = KDQ.i18n.t('extract.relevanceHeading');
    column.appendChild(relevanceHeading);

    var gaugeWrap = document.createElement('div');
    gaugeWrap.className = 'relevance-gauge-wrap';
    gaugeWrap.appendChild(KDQ.buildRelevanceGauge(relevance));

    var gaugeLabel = document.createElement('p');
    gaugeLabel.className = 'relevance-gauge-label';
    gaugeLabel.textContent = KDQ.i18n.t(band.labelKey);
    gaugeWrap.appendChild(gaugeLabel);
    column.appendChild(gaugeWrap);

    var bandText = document.createElement('p');
    bandText.className = 'extract-hint';
    bandText.textContent = KDQ.i18n.t(band.textKey);
    column.appendChild(bandText);

    var priorityHeading = document.createElement('p');
    priorityHeading.className = 'understand-panel-heading';
    priorityHeading.textContent = KDQ.i18n.t('extract.priorityHeading');
    column.appendChild(priorityHeading);

    var hint = document.createElement('p');
    hint.className = 'extract-hint';
    hint.textContent = KDQ.i18n.t('extract.priorityHint');
    column.appendChild(hint);

    results.forEach(function (item, index) {
      column.appendChild(this._buildLessonRow(item, index));
    }, this);

    return column;
  };

  ExtractView.prototype._buildLessonRow = function (item, index) {
    var marker = KDQ.getMarker(item.markerCode);
    var band = KDQ.getRelevanceBand(item.priority);

    var row = document.createElement('div');
    row.className = 'extract-lesson';

    var head = document.createElement('div');
    head.className = 'extract-lesson-head';
    head.innerHTML =
      '<span class="extract-lesson-rank">' + (index + 1) + '</span>' +
      '<span class="extract-lesson-label">' + item.markerCode + ' — ' + marker.label + '</span>';
    row.appendChild(head);

    var body = document.createElement('p');
    body.className = 'extract-lesson-body';
    body.textContent = KDQ.i18n.tr(marker.definition);
    row.appendChild(body);

    var metrics = document.createElement('div');
    metrics.className = 'extract-metrics';
    metrics.appendChild(this._metric('extract.metricRelevance', item.relevance.toFixed(1), 'tooltip.relevanceMetric'));
    metrics.appendChild(this._metric('extract.metricRosi', item.rosi.toFixed(1), 'tooltip.rosi'));
    metrics.appendChild(this._metric('extract.metricGap', (item.ashbyGap > 0 ? '+' : '') + item.ashbyGap, 'tooltip.ashby'));
    row.appendChild(metrics);

    var track = document.createElement('div');
    track.className = 'extract-priority-track';
    var fill = document.createElement('div');
    fill.className = 'extract-priority-fill';
    fill.style.width = ((item.priority - 1) / 4 * 100) + '%';
    fill.style.background = band.color;
    track.appendChild(fill);
    row.appendChild(track);

    return row;
  };

  ExtractView.prototype._metric = function (labelKey, value, tooltipKey) {
    var metric = document.createElement('span');
    metric.className = 'extract-metric has-tooltip';
    metric.title = KDQ.i18n.t(tooltipKey);
    metric.innerHTML =
      '<span class="extract-metric-label">' + KDQ.i18n.t(labelKey) + '</span>' +
      '<span class="extract-metric-value">' + value + '</span>';
    return metric;
  };

  ExtractView.prototype._buildChart = function (results) {
    var column = document.createElement('div');
    column.className = 'extract-column';

    var heading = document.createElement('p');
    heading.className = 'understand-panel-heading';
    heading.textContent = KDQ.i18n.t('extract.chartHeading');
    column.appendChild(heading);

    var svg = svgEl('svg', { viewBox: '0 0 ' + CHART.width + ' ' + CHART.height, 'class': 'extract-chart' });

    // Quadrant frame: the two dividers sit at gap 0 and mid-ROSI.
    svg.appendChild(svgEl('rect', {
      x: CHART.left, y: CHART.top,
      width: CHART.right - CHART.left, height: CHART.bottom - CHART.top,
      fill: 'none', stroke: 'var(--grid-line)', 'stroke-width': 1.2
    }));
    svg.appendChild(svgEl('line', {
      x1: scaleX(0), y1: CHART.top, x2: scaleX(0), y2: CHART.bottom,
      stroke: 'var(--maroon)', 'stroke-width': 1, 'stroke-dasharray': '4 4', opacity: 0.5
    }));
    svg.appendChild(svgEl('line', {
      x1: CHART.left, y1: scaleY(3), x2: CHART.right, y2: scaleY(3),
      stroke: 'var(--maroon)', 'stroke-width': 1, 'stroke-dasharray': '4 4', opacity: 0.5
    }));

    results.forEach(function (item) {
      var band = KDQ.getRelevanceBand(item.priority);
      var cx = scaleX(item.ashbyGap);
      var cy = scaleY(item.rosi);
      var r = bubbleRadius(item.relevance);

      var circle = svgEl('circle', {
        cx: cx.toFixed(1), cy: cy.toFixed(1), r: r.toFixed(1),
        fill: band.color, 'fill-opacity': 0.35, stroke: band.color, 'stroke-width': 1.5
      });
      var marker = KDQ.getMarker(item.markerCode);
      var title = document.createElementNS(SVG_NS, 'title');
      title.textContent = item.markerCode + ' — ' + marker.label;
      circle.appendChild(title);
      svg.appendChild(circle);

      var code = svgEl('text', {
        x: cx.toFixed(1), y: (cy + 4).toFixed(1),
        'class': 'extract-bubble-label', 'text-anchor': 'middle'
      });
      code.textContent = item.markerCode;
      svg.appendChild(code);
    });

    // Axis ticks: ROSI 1-5 up the left, requisite-variety gap across the bottom.
    [1, 3, 5].forEach(function (value) {
      var tick = svgEl('text', {
        x: CHART.left - 10, y: (scaleY(value) + 4).toFixed(1),
        'class': 'extract-axis-tick', 'text-anchor': 'end'
      });
      tick.textContent = value;
      svg.appendChild(tick);
    });

    [-4, 0, 4].forEach(function (value) {
      var tick = svgEl('text', {
        x: scaleX(value).toFixed(1), y: CHART.bottom + 18,
        'class': 'extract-axis-tick', 'text-anchor': 'middle'
      });
      tick.textContent = (value > 0 ? '+' : '') + value;
      svg.appendChild(tick);
    });

    column.appendChild(svg);

    var axisX = document.createElement('p');
    axisX.className = 'extract-axis-label has-tooltip';
    axisX.title = KDQ.i18n.t('tooltip.ashby');
    axisX.textContent = KDQ.i18n.t('extract.axisX');
    column.appendChild(axisX);

    var axisY = document.createElement('p');
    axisY.className = 'extract-axis-label has-tooltip';
    axisY.title = KDQ.i18n.t('tooltip.rosi');
    axisY.textContent = KDQ.i18n.t('extract.axisY');
    column.appendChild(axisY);

    var legend = document.createElement('p');
    legend.className = 'extract-hint';
    legend.textContent = KDQ.i18n.t('extract.chartLegend');
    column.appendChild(legend);

    return column;
  };

  KDQ.ExtractView = ExtractView;

})(window.KDQ = window.KDQ || {});
