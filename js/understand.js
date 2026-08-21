/**
 * UnderstandView renders the "Understand" stage of a breach: the
 * factual, read-only picture before the user starts judging it —
 * context, the DV type it was coded as (with rationale and research
 * confidence), its risk markers, and what the DV lens says can be
 * learned from it.
 *
 * The dataset carries no authored per-case "lessons learned" field, so
 * that panel is composed from sourced material already in the case:
 * the DV type's meaning, the researchers' rationale and the case note.
 */
(function (KDQ) {
  'use strict';

  function UnderstandView(dom) {
    this.container = dom.container;
    this.onSelectMarker = null;
    this.scenario = null;
  }

  UnderstandView.prototype.render = function (scenario) {
    this.scenario = scenario;
    this.container.innerHTML = '';

    this.container.appendChild(this._buildContextPanel(scenario));

    var grid = document.createElement('div');
    grid.className = 'understand-grid';
    grid.appendChild(this._buildDvPanel(scenario));
    grid.appendChild(this._buildMarkerPanel(scenario));
    grid.appendChild(this._buildLessonsPanel(scenario));
    this.container.appendChild(grid);
  };

  UnderstandView.prototype._panel = function (headingKey) {
    var panel = document.createElement('div');
    panel.className = 'understand-panel';

    var heading = document.createElement('p');
    heading.className = 'understand-panel-heading';
    heading.textContent = KDQ.i18n.t(headingKey);
    panel.appendChild(heading);

    return panel;
  };

  UnderstandView.prototype._buildContextPanel = function (scenario) {
    var panel = this._panel('understand.contextHeading');
    panel.className = 'understand-panel understand-context';

    var facts = document.createElement('div');
    facts.className = 'understand-facts';
    facts.appendChild(this._fact(KDQ.i18n.t('case.breachType'), KDQ.i18n.tr(scenario.breachType)));
    if (scenario.year != null) facts.appendChild(this._fact(KDQ.i18n.t('understand.year'), String(scenario.year)));
    facts.appendChild(this._fact(KDQ.i18n.t('case.confidence'), KDQ.i18n.tr(scenario.confidence), KDQ.i18n.t('tooltip.dvConfidence')));
    panel.appendChild(facts);

    var summary = document.createElement('p');
    summary.className = 'understand-text';
    summary.textContent = KDQ.i18n.tr(scenario.summary);
    panel.appendChild(summary);

    if (scenario.sources && scenario.sources.length) panel.appendChild(this._buildSources(scenario.sources));

    return panel;
  };

  UnderstandView.prototype._fact = function (label, value, tooltip) {
    var row = document.createElement('div');
    row.className = 'understand-fact';

    var labelEl = document.createElement('span');
    labelEl.className = tooltip ? 'understand-fact-label has-tooltip' : 'understand-fact-label';
    if (tooltip) labelEl.title = tooltip;
    labelEl.textContent = label;

    var valueEl = document.createElement('span');
    valueEl.className = 'understand-fact-value';
    valueEl.textContent = value;

    row.appendChild(labelEl);
    row.appendChild(valueEl);
    return row;
  };

  UnderstandView.prototype._buildSources = function (sources) {
    var wrap = document.createElement('div');
    wrap.className = 'understand-sources';

    var label = document.createElement('span');
    label.className = 'understand-fact-label';
    label.textContent = KDQ.i18n.t('case.sources');
    wrap.appendChild(label);

    sources.forEach(function (source) {
      var link = document.createElement('a');
      link.className = 'case-source-link';
      link.href = source.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = source.label;
      wrap.appendChild(link);
    });

    return wrap;
  };

  UnderstandView.prototype._buildDvPanel = function (scenario) {
    var panel = this._panel('understand.dvHeading');
    var relationship = KDQ.getRelationship(scenario.resultKey || 'none');

    var title = document.createElement('p');
    title.className = 'understand-dv-title';
    title.style.color = relationship.color;
    title.textContent = relationship.title;
    panel.appendChild(title);

    var definition = document.createElement('p');
    definition.className = 'understand-text';
    definition.textContent = KDQ.i18n.tr(relationship.text);
    panel.appendChild(definition);

    panel.appendChild(this._subBlock('case.rationale', KDQ.i18n.tr(scenario.rationale)));

    return panel;
  };

  UnderstandView.prototype._subBlock = function (labelKey, text) {
    var block = document.createElement('div');
    block.className = 'understand-subblock';

    var label = document.createElement('span');
    label.className = 'understand-fact-label';
    label.textContent = KDQ.i18n.t(labelKey);

    var body = document.createElement('p');
    body.className = 'understand-text';
    body.textContent = text;

    block.appendChild(label);
    block.appendChild(body);
    return block;
  };

  UnderstandView.prototype._buildMarkerPanel = function (scenario) {
    var self = this;
    var panel = this._panel('understand.markersHeading');

    var codes = [scenario.primaryMarker].concat(scenario.secondaryMarkers || []);
    codes.forEach(function (code, index) {
      var marker = KDQ.getMarker(code);
      if (!marker) return;

      var item = document.createElement('button');
      item.type = 'button';
      item.className = 'understand-marker' + (index === 0 ? ' primary' : '');
      item.innerHTML =
        '<span class="understand-marker-code">' + code + '</span>' +
        '<span class="understand-marker-body">' +
          '<span class="understand-marker-label">' + marker.label + '</span>' +
          '<span class="understand-marker-def">' + KDQ.i18n.tr(marker.definition) + '</span>' +
        '</span>';
      item.addEventListener('click', function () {
        if (typeof self.onSelectMarker === 'function') self.onSelectMarker(code);
      });
      panel.appendChild(item);
    });

    return panel;
  };

  UnderstandView.prototype._buildLessonsPanel = function (scenario) {
    var panel = this._panel('understand.lessonsHeading');
    var relationship = KDQ.getRelationship(scenario.resultKey || 'none');

    var lead = document.createElement('p');
    lead.className = 'understand-text';
    lead.textContent = KDQ.i18n.t('understand.lessonsLead').replace('{type}', relationship.title);
    panel.appendChild(lead);

    // Marker definitions read as "what to watch for" once the case is
    // understood, so they double as the lesson checklist.
    var list = document.createElement('ul');
    list.className = 'understand-lesson-list';

    var codes = [scenario.primaryMarker].concat(scenario.secondaryMarkers || []);
    codes.forEach(function (code) {
      var marker = KDQ.getMarker(code);
      if (!marker) return;
      var item = document.createElement('li');
      item.textContent = marker.label + ' — ' + KDQ.i18n.tr(marker.definition);
      list.appendChild(item);
    });
    panel.appendChild(list);

    if (scenario.notes) panel.appendChild(this._subBlock('case.notes', KDQ.i18n.tr(scenario.notes)));

    return panel;
  };

  KDQ.UnderstandView = UnderstandView;

})(window.KDQ = window.KDQ || {});
