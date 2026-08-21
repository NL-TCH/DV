/**
 * Wires Navigator + the three Bloom study stages + QuadrantDiagram +
 * LanguageSwitch together.
 *
 * The left column asks one question at a time: which learning
 * perspective (cyber breach / risk markers / dual vulnerability), then
 * what to select within it. The right column answers it — and once a
 * breach is picked, it becomes the study surface with three stages
 * following Bloom's progression:
 *
 * - Understand: the documented facts of the case, read-only.
 * - Learn: the user scores the case's risk markers against their own
 *   organisation (relevance, business case, requisite-variety gap).
 * - Extract: those scores become a ranked lessons-learned report and a
 *   ROSI/urgency bubble chart.
 *
 * On a language change the app re-renders whatever is currently shown
 * instead of reloading, so navigation position and any Learn scores
 * already entered survive the switch.
 */
(function (KDQ) {
  'use strict';

  function App(root) {
    this.root = root;
    this.activeScenario = null;
    this._previewKey = null;

    this.navigator = new KDQ.Navigator({
      perspectiveList: root.querySelector('#perspectiveList'),
      selectionBlock: root.querySelector('#selectionBlock'),
      selectionLabel: root.querySelector('#selectionLabel'),
      selectionBack: root.querySelector('#selectionBack'),
      searchWrap: root.querySelector('#selectionSearchWrap'),
      searchInput: root.querySelector('#selectionSearch'),
      selectionList: root.querySelector('#selectionList'),
      filtersWrap: root.querySelector('#selectionFilters'),
      filterToggle: root.querySelector('#filterToggle'),
      filterBadge: root.querySelector('#filterBadge'),
      filterPanel: root.querySelector('#filterPanel'),
      sectorChecks: root.querySelector('#sectorChecks'),
      countryChecks: root.querySelector('#countryChecks'),
      filterClear: root.querySelector('#filterClear'),
      yearMinRange: root.querySelector('#yearMinRange'),
      yearMaxRange: root.querySelector('#yearMaxRange'),
      yearMinLabel: root.querySelector('#yearMinLabel'),
      yearMaxLabel: root.querySelector('#yearMaxLabel'),
      yearSliderRange: root.querySelector('#yearSliderRange')
    });

    this.understandView = new KDQ.UnderstandView({
      container: root.querySelector('#understandStage')
    });

    this.learnEngine = new KDQ.LearnEngine();
    this.learnView = new KDQ.LearnView(this.learnEngine, {
      container: root.querySelector('#learnStage'),
      progress: root.querySelector('#learnProgress')
    });

    this.extractView = new KDQ.ExtractView({
      container: root.querySelector('#extractStage')
    });

    this.diagram = new KDQ.QuadrantDiagram({
      resultGroup: root.querySelector('#resultGroup'),
      labelGroup: root.querySelector('#resultLabelGroup'),
      resultTag: root.querySelector('#resultTag'),
      resultSwatch: root.querySelector('#resultSwatch'),
      resultTagText: root.querySelector('#resultTagText')
    });

    // Right-column blocks, shown in combinations by _showBlocks().
    this.blocks = {
      quadrant: root.querySelector('#quadrantBlock'),
      aboutDv: root.querySelector('#aboutDvBlock'),
      marker: root.querySelector('#markerBlock'),
      stage: root.querySelector('#stageBlock'),
      dataset: root.querySelector('#datasetBlock')
    };

    this.stages = [
      { key: 'understand', btn: root.querySelector('#stageUnderstandBtn'), content: root.querySelector('#understandStage') },
      { key: 'learn', btn: root.querySelector('#stageLearnBtn'), content: root.querySelector('#learnStageWrap') },
      { key: 'extract', btn: root.querySelector('#stageExtractBtn'), content: root.querySelector('#extractStage') }
    ];
    this.activeStage = 'understand';

    this.diagramHint = root.querySelector('#diagramHint');
    this.resultTypeBlock = root.querySelector('#resultTypeBlock');
    this.resultTitle = root.querySelector('#resultTitle');
    this.resultText = root.querySelector('#resultText');
    this.stageCaseName = root.querySelector('#stageCaseName');
    this.markerBlockBody = root.querySelector('#markerBlockBody');
    this.datasetLink = root.querySelector('#datasetLink');
    this.homeLink = root.querySelector('#homeLink');

    this.languageSwitch = new KDQ.LanguageSwitch(root.querySelector('#langSwitch'));

    this.navigator.onPerspective = this._handlePerspective.bind(this);
    this.navigator.onDrill = this._handleDrill.bind(this);
    this.navigator.onSelectScenario = this._handleSelectScenario.bind(this);
    this.understandView.onSelectMarker = this._handleMarkerLink.bind(this);
    this.diagram.onSelectRelationship = this._handleLegendPreview.bind(this);

    this.stages.forEach(function (stage) {
      stage.btn.addEventListener('click', function () { this._switchStage(stage.key); }.bind(this));
    }, this);

    this.datasetLink.addEventListener('click', this._showDataset.bind(this));
    this.homeLink.addEventListener('click', this.restart.bind(this));

    KDQ.i18n.onChange(this._handleLanguageChange.bind(this));

    this._applyDocumentStrings();
    this._showIntro();
  }

  // ---- right-column block visibility ----

  App.prototype._showBlocks = function (visibleKeys) {
    Object.keys(this.blocks).forEach(function (key) {
      this.blocks[key].classList.toggle('hidden', visibleKeys.indexOf(key) === -1);
    }, this);
  };

  /** No perspective chosen yet: the interactive quadrant legend is the landing state. */
  App.prototype._showIntro = function () {
    this.activeScenario = null;
    this._previewKey = null;
    this._showBlocks(['quadrant']);
    this.diagram.showLegend();
    this.diagramHint.classList.remove('hidden');
    this.resultTypeBlock.classList.add('hidden');
  };

  App.prototype._handlePerspective = function (key) {
    this.activeScenario = null;
    this._previewKey = null;

    if (key === 'dv') {
      // The DV perspective is where the framework explainer lives now.
      this._showBlocks(['aboutDv', 'quadrant']);
      this.diagram.showLegend();
      this.diagramHint.classList.remove('hidden');
      this.resultTypeBlock.classList.add('hidden');
      return;
    }

    this._showIntro();
  };

  App.prototype._handleDrill = function (kind, key) {
    this.activeScenario = null;

    if (kind === 'dv') {
      var relationship = KDQ.getRelationship(key);
      this._showBlocks(['quadrant']);
      this.diagramHint.classList.add('hidden');
      this.diagram.reveal(relationship);
      this.resultTypeBlock.classList.remove('hidden');
      this.resultTitle.textContent = relationship.title;
      this.resultText.textContent = KDQ.i18n.tr(relationship.text);
      return;
    }

    this._renderMarkerBlock(key);
    this._showBlocks(['marker']);
  };

  App.prototype._renderMarkerBlock = function (code) {
    var marker = KDQ.getMarker(code);
    this.markerBlockBody.innerHTML = '';

    var title = document.createElement('p');
    title.className = 'marker-block-title';
    title.textContent = code + ' — ' + marker.label;
    this.markerBlockBody.appendChild(title);

    var definition = document.createElement('p');
    definition.className = 'understand-text';
    definition.textContent = KDQ.i18n.tr(marker.definition);
    this.markerBlockBody.appendChild(definition);

    // Which DV types this marker actually shows up in — the research
    // angle a marker-first reader is usually after.
    var counts = {};
    var order = [];
    KDQ.getScenarios().forEach(function (scenario) {
      var codes = [scenario.primaryMarker].concat(scenario.secondaryMarkers || []);
      if (codes.indexOf(code) === -1) return;
      var key = scenario.resultKey || 'none';
      if (!counts[key]) { counts[key] = 0; order.push(key); }
      counts[key] += 1;
    });

    if (!order.length) return;

    var heading = document.createElement('p');
    heading.className = 'understand-panel-heading';
    heading.textContent = KDQ.i18n.t('markerBlock.dvHeading');
    this.markerBlockBody.appendChild(heading);

    order.forEach(function (key) {
      var relationship = KDQ.getRelationship(key);
      var row = document.createElement('div');
      row.className = 'marker-dv-row';
      row.innerHTML =
        '<span class="marker-dv-swatch" style="background:' + relationship.color + '"></span>' +
        '<span class="marker-dv-label">' + relationship.title + '</span>' +
        '<span class="marker-dv-count">' + counts[key] + '</span>';
      this.markerBlockBody.appendChild(row);
    }, this);
  };

  App.prototype._handleSelectScenario = function (scenario) {
    this.activeScenario = scenario;
    this.learnEngine.loadScenario(scenario);
    this.stageCaseName.textContent = KDQ.i18n.tr(scenario.name);
    this._showBlocks(['stage']);
    this._switchStage('understand');
  };

  /** A marker inside a case was clicked: pivot the left column to that marker. */
  App.prototype._handleMarkerLink = function (code) {
    this.navigator.showMarker(code);
  };

  /** A legend line/dot/label was clicked on the idle quadrant — preview its explanation. */
  App.prototype._handleLegendPreview = function (relationshipKey) {
    this._previewKey = relationshipKey;
    var relationship = KDQ.getRelationship(relationshipKey);
    this.resultTypeBlock.classList.remove('hidden');
    this.resultTitle.textContent = relationship.title;
    this.resultText.textContent = KDQ.i18n.tr(relationship.text);
  };

  // ---- Bloom stages ----

  App.prototype._switchStage = function (activeKey) {
    this.activeStage = activeKey;

    this.stages.forEach(function (stage) {
      var isActive = stage.key === activeKey;
      stage.content.classList.toggle('hidden', !isActive);
      stage.btn.classList.toggle('active', isActive);
    });

    this._renderActiveStage();
  };

  App.prototype._renderActiveStage = function () {
    if (!this.activeScenario) return;

    if (this.activeStage === 'understand') {
      this.understandView.render(this.activeScenario);
    } else if (this.activeStage === 'learn') {
      this.learnView.render();
    } else {
      // Extract reads whatever Learn has so far, so it is always built fresh on open.
      this.extractView.render(this.learnEngine);
    }
  };

  App.prototype._showDataset = function () {
    this._showBlocks(['dataset']);
  };

  App.prototype.restart = function () {
    this.navigator.reset();
    this._showIntro();
  };

  App.prototype._applyDocumentStrings = function () {
    KDQ.applyStaticStrings(this.root);
    document.title = KDQ.i18n.t('meta.title');
    document.documentElement.lang = KDQ.i18n.getLang();
  };

  App.prototype._handleLanguageChange = function () {
    this._applyDocumentStrings();
    this.navigator.refresh();

    if (this.activeScenario) {
      this.stageCaseName.textContent = KDQ.i18n.tr(this.activeScenario.name);
      this._renderActiveStage();
    } else if (this._previewKey) {
      this._handleLegendPreview(this._previewKey);
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    new App(document);
  });

})(window.KDQ = window.KDQ || {});
