/**
 * Wires QuizEngine + QuizView + ScenarioBrowser + MarkersOverview +
 * AnswerSummary + QuadrantDiagram + RelevanceEngine/View +
 * LanguageSwitch together. The homepage has 5 tabs (Overview,
 * Scenarios, Risk markers, About DV, About the data). Overview is
 * first/default and shows the self-scan quiz next to the live
 * quadrant. Clicking a risk-marker tag on a scenario result jumps to
 * Scenarios pre-filtered to that marker via ScenarioBrowser.filterByMarker().
 *
 * Two paths lead to a result:
 * - the manual quiz: answers are scored through KDQ.resolveResultKey.
 * - a researched scenario: its "resultKey" is the classification the
 *   research already assigned, used as-is (see data/content.js).
 *
 * A scenario result can additionally lead into the relevance check —
 * a separate, question-by-question sub-flow (own button, own "page")
 * reachable only from a scenario result, since it's derived from that
 * scenario's risk markers.
 *
 * On a language change, the app re-renders whichever view is
 * currently active instead of reloading, so state (quiz progress or
 * the shown result) survives the switch — except mid-relevance-check
 * progress, which resets back to the case result on a language swap.
 */
(function (KDQ) {
  'use strict';

  function App(root) {
    this.root = root;
    this.questionView = root.querySelector('#questionView');
    this.resultView = root.querySelector('#resultView');
    this.relevanceViewEl = root.querySelector('#relevanceView');
    this.relevanceResultView = root.querySelector('#relevanceResultView');
    this.relevanceIntro = root.querySelector('#relevanceIntro');
    this._activeRelationshipKey = null;
    this._previewKey = null;

    this.tabs = [
      { key: 'overview', btn: root.querySelector('#tabOverviewBtn'), content: root.querySelector('#overviewTab') },
      { key: 'scenarios', btn: root.querySelector('#tabScenariosBtn'), content: root.querySelector('#scenariosTab') },
      { key: 'markers', btn: root.querySelector('#tabMarkersBtn'), content: root.querySelector('#markersTab') },
      { key: 'about', btn: root.querySelector('#tabAboutBtn'), content: root.querySelector('#aboutTab') },
      { key: 'dataset', btn: root.querySelector('#tabDatasetBtn'), content: root.querySelector('#datasetTab') }
    ];

    // The right column shows one of: the quadrant, the scenario list, the
    // marker list, or the About DV / About the data content — whichever
    // matches the active left-column tab — except while a result is
    // shown, when it always shows the quadrant. 'overview' has no entry
    // below, so it falls back to the quadrant.
    this.quadrantPanel = root.querySelector('#quadrantPanel');
    this.rightPanels = {
      scenarios: root.querySelector('#scenarioListPanel'),
      markers: root.querySelector('#markerListPanel'),
      about: root.querySelector('#aboutContentPanel'),
      dataset: root.querySelector('#datasetContentPanel')
    };

    this.engine = new KDQ.QuizEngine(KDQ.getQuestions());
    this.quizView = new KDQ.QuizView(this.engine, {
      stepLabel: root.querySelector('#stepLabel'),
      progressFill: root.querySelector('#progressFill'),
      qTitle: root.querySelector('#qTitle'),
      qOptions: root.querySelector('#qOptions'),
      btnBack: root.querySelector('#btnBack'),
      btnNext: root.querySelector('#btnNext')
    });

    this.scenarioBrowser = new KDQ.ScenarioBrowser({
      searchInput: root.querySelector('#scenarioSearchInput'),
      sortSelect: root.querySelector('#scenarioSortSelect'),
      markerToggle: root.querySelector('#scenarioMarkerToggle'),
      markerBadge: root.querySelector('#scenarioMarkerBadge'),
      markerChecks: root.querySelector('#scenarioMarkerChecks'),
      typeToggle: root.querySelector('#scenarioTypeToggle'),
      typeBadge: root.querySelector('#scenarioTypeBadge'),
      typeChecks: root.querySelector('#scenarioTypeChecks'),
      yearMinRange: root.querySelector('#yearMinRange'),
      yearMaxRange: root.querySelector('#yearMaxRange'),
      yearMinLabel: root.querySelector('#yearMinLabel'),
      yearMaxLabel: root.querySelector('#yearMaxLabel'),
      yearSliderRange: root.querySelector('#yearSliderRange'),
      listContainer: root.querySelector('#scenarioList')
    });

    this.markersOverview = new KDQ.MarkersOverview({
      checkContainer: root.querySelector('#markerOverviewChecks'),
      listContainer: root.querySelector('#markerScenarioList')
    });

    this.answerSummary = new KDQ.AnswerSummary({
      sourceTag: root.querySelector('#answerSourceTag'),
      container: root.querySelector('#answerContainer'),
      markerContainer: root.querySelector('#markerPanel'),
      rationaleContainer: root.querySelector('#rationaleBlock')
    });

    this.layoutEl = root.querySelector('.layout');
    this.markersPanelSection = root.querySelector('#markersPanelSection');

    this.relevanceEngine = new KDQ.RelevanceEngine();
    this.relevanceView = new KDQ.RelevanceView(this.relevanceEngine, {
      stepLabel: root.querySelector('#relevanceStepLabel'),
      progressFill: root.querySelector('#relevanceProgressFill'),
      questionMeta: root.querySelector('#relevanceQuestionMeta'),
      questionText: root.querySelector('#relevanceQuestionText'),
      scale: root.querySelector('#relevanceScale'),
      btnBack: root.querySelector('#relevanceBack'),
      btnNext: root.querySelector('#relevanceNext')
    });
    this.relevanceSummary = root.querySelector('#relevanceSummary');
    this.btnStartRelevance = root.querySelector('#btnStartRelevance');
    this.btnBackToCaseResult = root.querySelector('#btnBackToCaseResult');
    this.btnRestartFromRelevance = root.querySelector('#btnRestartFromRelevance');

    this.diagram = new KDQ.QuadrantDiagram({
      resultGroup: root.querySelector('#resultGroup'),
      labelGroup: root.querySelector('#resultLabelGroup'),
      resultTag: root.querySelector('#resultTag'),
      resultSwatch: root.querySelector('#resultSwatch'),
      resultTagText: root.querySelector('#resultTagText')
    });

    this.resultTypeBlock = root.querySelector('#resultTypeBlock');
    this.resultTitle = root.querySelector('#resultTitle');
    this.resultText = root.querySelector('#resultText');
    this.diagramHint = root.querySelector('#diagramHint');
    this.btnRestart = root.querySelector('#btnRestart');
    this.homeLink = root.querySelector('#homeLink');

    this.languageSwitch = new KDQ.LanguageSwitch(root.querySelector('#langSwitch'));

    this.quizView.onComplete = function () {
      var answers = Object.assign({}, this.engine.answers);
      this.showResult(KDQ.resolveResultKey(answers), { source: 'quiz', answers: answers });
    }.bind(this);

    this.scenarioBrowser.onSelect = function (scenario) {
      this.showResult(scenario.resultKey || 'none', { source: 'scenario', scenario: scenario });
    }.bind(this);

    this.markersOverview.onSelect = function (scenario) {
      this.showResult(scenario.resultKey || 'none', { source: 'scenario', scenario: scenario });
    }.bind(this);

    this.answerSummary.onSelectMarker = function (code) {
      this._goToFilteredScenarios(code);
    }.bind(this);

    this.diagram.onSelectRelationship = this._handleLegendPreview.bind(this);

    this.btnStartRelevance.addEventListener('click', this._startRelevanceCheck.bind(this));
    this.relevanceView.onComplete = this._finishRelevanceCheck.bind(this);
    this.btnBackToCaseResult.addEventListener('click', this._backToCaseResult.bind(this));
    this.btnRestartFromRelevance.addEventListener('click', this.restart.bind(this));

    this.btnRestart.addEventListener('click', this.restart.bind(this));
    this.homeLink.addEventListener('click', this.restart.bind(this));

    this.tabs.forEach(function (tab) {
      tab.btn.addEventListener('click', function () { this._switchTab(tab.key); }.bind(this));
    }, this);

    KDQ.i18n.onChange(this._handleLanguageChange.bind(this));

    this._applyDocumentStrings();
    this.diagram.showLegend();
    this._switchTab('overview');
    this.quizView.render();
  }

  /** A legend line/dot/label was clicked on the idle homepage — preview its explanation, no other state changes. */
  App.prototype._handleLegendPreview = function (relationshipKey) {
    this._previewKey = relationshipKey;

    var relationship = KDQ.getRelationship(relationshipKey);
    this.resultTypeBlock.classList.remove('hidden');
    this.resultTitle.textContent = relationship.title;
    this.resultText.textContent = KDQ.i18n.tr(relationship.text);
  };

  App.prototype.showResult = function (relationshipKey, meta) {
    this._activeRelationshipKey = relationshipKey;
    this._activeMeta = meta;
    this._previewKey = null;

    var relationship = KDQ.getRelationship(relationshipKey);

    this.questionView.classList.add('hidden');
    this.relevanceViewEl.classList.add('hidden');
    this.relevanceResultView.classList.add('hidden');
    this.resultView.classList.remove('hidden');

    // A result always reveals in the quadrant, regardless of which
    // tab (and therefore which right-column panel) was active before.
    this._hideAllRightPanels();
    this.quadrantPanel.classList.remove('hidden');

    this.answerSummary.render(meta);
    this.resultTypeBlock.classList.remove('hidden');
    this.resultTitle.textContent = relationship.title;
    this.resultText.textContent = KDQ.i18n.tr(relationship.text);
    this.diagramHint.classList.add('hidden');

    this.diagram.reveal(relationship);

    // Only a researched scenario has a rationale + risk markers to show,
    // so the third column only appears for that path.
    var showThirdColumn = meta.source === 'scenario';
    this.layoutEl.classList.toggle('three-col', showThirdColumn);
    this.markersPanelSection.classList.toggle('hidden', !showThirdColumn);

    // The relevance check is scenario-only too — the manual quiz has no markers to derive it from.
    if (meta.source === 'scenario') {
      this.relevanceEngine.loadScenario(meta.scenario);
      this.relevanceIntro.classList.toggle('hidden', !this.relevanceEngine.hasQuestions());
    } else {
      this.relevanceIntro.classList.add('hidden');
    }
  };

  App.prototype._startRelevanceCheck = function () {
    this.resultView.classList.add('hidden');
    this.relevanceViewEl.classList.remove('hidden');
    this.relevanceIntro.classList.add('hidden');
    this.relevanceEngine.index = 0;
    this.relevanceView.render();
  };

  App.prototype._finishRelevanceCheck = function () {
    var average = this.relevanceEngine.average();
    var band = KDQ.getRelevanceBand(average);

    this.relevanceSummary.innerHTML = '';

    var gaugeWrap = document.createElement('div');
    gaugeWrap.className = 'relevance-gauge-wrap';
    gaugeWrap.appendChild(KDQ.buildRelevanceGauge(average));

    var label = document.createElement('p');
    label.className = 'relevance-gauge-label';
    label.textContent = KDQ.i18n.t(band.labelKey);
    gaugeWrap.appendChild(label);

    this.relevanceSummary.appendChild(gaugeWrap);

    var text = document.createElement('p');
    text.className = 'relevance-score-text';
    text.textContent = KDQ.i18n.t(band.textKey);
    this.relevanceSummary.appendChild(text);

    this.relevanceSummary.appendChild(this._buildMarkerBreakdown());

    this.relevanceViewEl.classList.add('hidden');
    this.relevanceResultView.classList.remove('hidden');
  };

  /** Small bar-per-marker breakdown shown below the gauge — how each marker scored on its own. */
  App.prototype._buildMarkerBreakdown = function () {
    var wrap = document.createElement('div');
    wrap.className = 'relevance-marker-breakdown';

    var heading = document.createElement('p');
    heading.className = 'relevance-marker-heading';
    heading.textContent = KDQ.i18n.t('relevance.perMarkerHeading');
    wrap.appendChild(heading);

    this.relevanceEngine.perMarkerScores().forEach(function (item) {
      var marker = KDQ.getMarker(item.markerCode);
      var band = KDQ.getRelevanceBand(item.average);

      var row = document.createElement('div');
      row.className = 'relevance-marker-row';

      var top = document.createElement('div');
      top.className = 'relevance-marker-top';
      top.innerHTML =
        '<span class="relevance-marker-label">' + item.markerCode + ' — ' + marker.label + '</span>' +
        '<span class="relevance-marker-value">' + item.average.toFixed(1) + ' / 5</span>';
      row.appendChild(top);

      var track = document.createElement('div');
      track.className = 'relevance-marker-track';
      var fill = document.createElement('div');
      fill.className = 'relevance-marker-fill';
      fill.style.width = ((item.average - 1) / 4 * 100) + '%';
      fill.style.background = band.color;
      track.appendChild(fill);
      row.appendChild(track);

      wrap.appendChild(row);
    });

    return wrap;
  };

  App.prototype._backToCaseResult = function () {
    this.relevanceResultView.classList.add('hidden');
    this.relevanceViewEl.classList.add('hidden');
    this.resultView.classList.remove('hidden');
    if (this.relevanceEngine.hasQuestions()) this.relevanceIntro.classList.remove('hidden');
  };

  /** Switches between the homepage tabs (Overview / Scenarios / Risk markers / About DV / About the data). */
  App.prototype._switchTab = function (activeKey) {
    this.tabs.forEach(function (tab) {
      var isActive = tab.key === activeKey;
      tab.content.classList.toggle('hidden', !isActive);
      tab.btn.classList.toggle('active', isActive);
    });
    this._updateRightColumn(activeKey);
  };

  App.prototype._hideAllRightPanels = function () {
    var self = this;
    Object.keys(this.rightPanels).forEach(function (key) {
      self.rightPanels[key].classList.add('hidden');
    });
  };

  /**
   * Right column mirrors the active left-column tab: Scenarios shows
   * the scenario list, Risk markers shows the marker list, About DV /
   * About the data show their own content panel, and Overview (no
   * entry in rightPanels) falls back to the quadrant. showResult()
   * overrides this back to the quadrant regardless.
   */
  App.prototype._updateRightColumn = function (activeKey) {
    var target = this.rightPanels[activeKey] || null;
    this._hideAllRightPanels();
    if (target) target.classList.remove('hidden');
    this.quadrantPanel.classList.toggle('hidden', !!target);
  };

  /** Called when a risk-marker tag on a scenario result is clicked: leave the result, land on Scenarios pre-filtered to that marker. */
  App.prototype._goToFilteredScenarios = function (code) {
    this.restart();
    this.scenarioBrowser.filterByMarker(code);
    this._switchTab('scenarios');
  };

  App.prototype.restart = function () {
    this._activeRelationshipKey = null;
    this._activeMeta = null;
    this._previewKey = null;

    this.engine.reset();
    this.scenarioBrowser.reset();
    this.diagram.showLegend();
    this.resultView.classList.add('hidden');
    this.relevanceViewEl.classList.add('hidden');
    this.relevanceResultView.classList.add('hidden');
    this.relevanceIntro.classList.add('hidden');
    this.questionView.classList.remove('hidden');
    this.resultTypeBlock.classList.add('hidden');
    this.diagramHint.classList.remove('hidden');
    this.layoutEl.classList.remove('three-col');
    this.markersPanelSection.classList.add('hidden');
    this._switchTab('overview');
    this.quizView.render();
  };

  App.prototype._applyDocumentStrings = function () {
    KDQ.applyStaticStrings(this.root);
    document.title = KDQ.i18n.t('meta.title');
    document.documentElement.lang = KDQ.i18n.getLang();
  };

  App.prototype._handleLanguageChange = function () {
    this._applyDocumentStrings();
    this.scenarioBrowser.refresh();
    this.markersOverview.refresh();

    if (this._activeRelationshipKey) {
      // Re-render the currently shown result in the new language — this
      // also resets any in-progress relevance check back to the case result.
      this.showResult(this._activeRelationshipKey, this._activeMeta);
    } else if (this._previewKey) {
      this._handleLegendPreview(this._previewKey);
    } else {
      this.quizView.render();
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    new App(document);
  });

})(window.KDQ = window.KDQ || {});
