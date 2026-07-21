/**
 * AnswerSummary renders the three places that fill in once a result
 * exists (quiz results only ever use the left column — the other two
 * stay hidden since a manual quiz has no rationale or risk markers):
 * - left: quiz answers, or a scenario's case facts (DV type/explanation
 *   itself is set separately by app.js, shown above this).
 * - middle, below the quadrant: the scenario's rationale.
 * - right, next to the quadrant: the scenario's risk markers.
 */
(function (KDQ) {
  'use strict';

  function AnswerSummary(dom) {
    this.sourceTag = dom.sourceTag;
    this.container = dom.container;
    this.markerContainer = dom.markerContainer;
    this.rationaleContainer = dom.rationaleContainer;
    this.onSelectMarker = null;
    this._lastMeta = null;
  }

  AnswerSummary.prototype.render = function (meta) {
    this._lastMeta = meta;
    if (meta.source === 'scenario') {
      this._renderScenario(meta.scenario);
    } else {
      this._renderQuiz(meta.answers);
    }
  };

  /** Re-renders the last shown result in the current language. */
  AnswerSummary.prototype.refresh = function () {
    if (this._lastMeta) this.render(this._lastMeta);
  };

  /** answers: { [questionId]: optionValue } */
  AnswerSummary.prototype._renderQuiz = function (answers) {
    this.sourceTag.textContent = KDQ.i18n.t('answers.quizSource');

    var list = document.createElement('ol');
    list.className = 'answer-list';

    KDQ.getQuestions().forEach(function (question) {
      var value = answers[question.id];
      var option = question.options.filter(function (o) { return o.value === value; })[0];

      var item = document.createElement('li');
      item.className = 'answer-item';
      item.innerHTML =
        '<span class="answer-q">' + KDQ.i18n.tr(question.text) + '</span>' +
        '<span class="answer-a">' + (option ? KDQ.i18n.tr(option.label) : '—') + '</span>';
      list.appendChild(item);
    });

    this.container.innerHTML = '';
    this.container.appendChild(list);

    this.markerContainer.innerHTML = '';
    this.markerContainer.classList.add('hidden');

    this.rationaleContainer.innerHTML = '';
    this.rationaleContainer.classList.add('hidden');
  };

  AnswerSummary.prototype._renderScenario = function (scenario) {
    this.sourceTag.textContent = KDQ.i18n.t('answers.scenarioSourcePrefix') + KDQ.i18n.tr(scenario.name);

    var sheet = document.createElement('div');
    sheet.className = 'case-sheet';

    sheet.appendChild(this._factRow(KDQ.i18n.t('case.breachType'), KDQ.i18n.tr(scenario.breachType)));
    sheet.appendChild(this._factRow(KDQ.i18n.t('case.confidence'), KDQ.i18n.tr(scenario.confidence), KDQ.i18n.t('tooltip.dvConfidence')));
    sheet.appendChild(this._textBlock(KDQ.i18n.t('case.summary'), KDQ.i18n.tr(scenario.summary)));
    if (scenario.notes) sheet.appendChild(this._textBlock(KDQ.i18n.t('case.notes'), KDQ.i18n.tr(scenario.notes)));
    if (scenario.sources && scenario.sources.length) sheet.appendChild(this._sourcesRow(scenario.sources));

    this.container.innerHTML = '';
    this.container.appendChild(sheet);

    this._renderMarkerPanel(scenario);
    this._renderRationalePanel(scenario);
  };

  AnswerSummary.prototype._factRow = function (label, value, tooltip) {
    var row = document.createElement('div');
    row.className = 'case-fact';
    var labelClass = tooltip ? 'case-fact-label has-tooltip' : 'case-fact-label';
    var titleAttr = tooltip ? ' title="' + tooltip + '"' : '';
    row.innerHTML = '<span class="' + labelClass + '"' + titleAttr + '>' + label + '</span><span class="case-fact-value">' + value + '</span>';
    return row;
  };

  /** Renders the scenario's risk markers into the panel next to the quadrant, each clickable. */
  AnswerSummary.prototype._renderMarkerPanel = function (scenario) {
    var self = this;
    var label = document.createElement('p');
    label.className = 'marker-panel-label';
    label.textContent = KDQ.i18n.t('case.markers');

    var tagsWrap = document.createElement('div');
    tagsWrap.className = 'marker-tags';

    var codes = [scenario.primaryMarker].concat(scenario.secondaryMarkers || []);
    codes.forEach(function (code, index) {
      var marker = KDQ.getMarker(code);
      var tag = document.createElement('button');
      tag.type = 'button';
      tag.className = index === 0 ? 'marker-tag marker-tag-primary' : 'marker-tag';
      tag.title = KDQ.i18n.tr(marker.definition);
      tag.textContent = code + ' — ' + marker.label;
      tag.addEventListener('click', function () {
        if (typeof self.onSelectMarker === 'function') self.onSelectMarker(code);
      });
      tagsWrap.appendChild(tag);
    });

    this.markerContainer.innerHTML = '';
    this.markerContainer.appendChild(label);
    this.markerContainer.appendChild(tagsWrap);
    this.markerContainer.classList.remove('hidden');
  };

  /** Renders the scenario's rationale into the block below the quadrant. */
  AnswerSummary.prototype._renderRationalePanel = function (scenario) {
    this.rationaleContainer.innerHTML =
      '<p class="case-fact-label">' + KDQ.i18n.t('case.rationale') + '</p>' +
      '<p class="case-text">' + KDQ.i18n.tr(scenario.rationale) + '</p>';
    this.rationaleContainer.classList.remove('hidden');
  };

  AnswerSummary.prototype._textBlock = function (label, text) {
    var block = document.createElement('div');
    block.className = 'case-text-block';
    block.innerHTML = '<span class="case-fact-label">' + label + '</span><p class="case-text">' + text + '</p>';
    return block;
  };

  AnswerSummary.prototype._sourcesRow = function (sources) {
    var row = document.createElement('div');
    row.className = 'case-text-block';

    var links = sources.map(function (source) {
      return '<a class="case-source-link" href="' + source.url + '" target="_blank" rel="noopener noreferrer">' + source.label + '</a>';
    }).join('');

    row.innerHTML = '<span class="case-fact-label">' + KDQ.i18n.t('case.sources') + '</span><span class="case-sources">' + links + '</span>';
    return row;
  };

  KDQ.AnswerSummary = AnswerSummary;

})(window.KDQ = window.KDQ || {});
