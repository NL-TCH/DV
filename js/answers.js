/**
 * AnswerSummary renders what's shown once a result exists:
 * - the left fact sheet: quiz answers, or a scenario's case details
 *   (DV type/explanation is set separately by app.js, shown first).
 * - the right marker panel, next to the quadrant: the scenario's risk
 *   markers (quiz results have none, so the panel stays hidden).
 */
(function (KDQ) {
  'use strict';

  function AnswerSummary(dom) {
    this.sourceTag = dom.sourceTag;
    this.container = dom.container;
    this.markerContainer = dom.markerContainer;
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
  };

  AnswerSummary.prototype._renderScenario = function (scenario) {
    this.sourceTag.textContent = KDQ.i18n.t('answers.scenarioSourcePrefix') + KDQ.i18n.tr(scenario.name);

    var sheet = document.createElement('div');
    sheet.className = 'case-sheet';

    sheet.appendChild(this._factRow(KDQ.i18n.t('case.breachType'), KDQ.i18n.tr(scenario.breachType)));
    sheet.appendChild(this._factRow(KDQ.i18n.t('case.confidence'), KDQ.i18n.tr(scenario.confidence)));
    sheet.appendChild(this._textBlock(KDQ.i18n.t('case.summary'), KDQ.i18n.tr(scenario.summary)));
    sheet.appendChild(this._textBlock(KDQ.i18n.t('case.rationale'), KDQ.i18n.tr(scenario.rationale)));
    if (scenario.notes) sheet.appendChild(this._textBlock(KDQ.i18n.t('case.notes'), KDQ.i18n.tr(scenario.notes)));
    if (scenario.sources && scenario.sources.length) sheet.appendChild(this._sourcesRow(scenario.sources));

    this.container.innerHTML = '';
    this.container.appendChild(sheet);

    this._renderMarkerPanel(scenario);
  };

  AnswerSummary.prototype._factRow = function (label, value) {
    var row = document.createElement('div');
    row.className = 'case-fact';
    row.innerHTML = '<span class="case-fact-label">' + label + '</span><span class="case-fact-value">' + value + '</span>';
    return row;
  };

  /** Renders the scenario's risk markers into the panel next to the quadrant. */
  AnswerSummary.prototype._renderMarkerPanel = function (scenario) {
    var primary = KDQ.getMarker(scenario.primaryMarker);
    var tags = '<span class="marker-tag marker-tag-primary" title="' + KDQ.i18n.tr(primary.definition) + '">' +
      scenario.primaryMarker + ' — ' + primary.label + '</span>';

    scenario.secondaryMarkers.forEach(function (code) {
      var marker = KDQ.getMarker(code);
      tags += '<span class="marker-tag" title="' + KDQ.i18n.tr(marker.definition) + '">' + code + ' — ' + marker.label + '</span>';
    });

    this.markerContainer.innerHTML =
      '<p class="marker-panel-label">' + KDQ.i18n.t('case.markers') + '</p>' +
      '<div class="marker-tags">' + tags + '</div>';
    this.markerContainer.classList.remove('hidden');
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
