/**
 * Navigator drives the left column: first the learning perspective
 * (cyber breach / risk markers / dual vulnerability), then a
 * contextual selection list.
 *
 * The marker and DV perspectives drill down one level first — pick a
 * marker or a DV type, then pick one of the breaches carrying it — so
 * all three routes end on the same breach, and the study stages on the
 * right stay identical whichever way the user got there.
 *
 * Wherever a breach list is shown it can be narrowed by search plus
 * industry / country / year filters. Those filters sit on top of the
 * drill-down, so "breaches carrying M1, in critical infrastructure,
 * since 2020" is one path.
 */
(function (KDQ) {
  'use strict';

  var DV_ORDER = ['leadership', 'execution', 'expertise-leadership', 'expertise-execution', 'none'];

  function markerCount(code) {
    return KDQ.getScenarios().filter(function (s) {
      return [s.primaryMarker].concat(s.secondaryMarkers || []).indexOf(code) !== -1;
    }).length;
  }

  function dvCount(key) {
    return KDQ.getScenarios().filter(function (s) { return (s.resultKey || 'none') === key; }).length;
  }

  function countLabel(count) {
    return count + ' ' + KDQ.i18n.t(count === 1 ? 'nav.breachSingular' : 'nav.breachPlural');
  }

  function hasSelection(map) {
    return Object.keys(map).some(function (key) { return map[key]; });
  }

  function countSelected(map) {
    return Object.keys(map).filter(function (key) { return map[key]; }).length;
  }

  /** A checkbox row: label, a count badge, and a change callback. */
  function buildCheckRow(labelText, count, isSelected, onToggle) {
    var row = document.createElement('label');
    row.className = 'filter-check-row';

    var input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'filter-checkbox';
    input.checked = !!isSelected;

    var box = document.createElement('span');
    box.className = 'filter-check-box';

    var label = document.createElement('span');
    label.className = 'filter-check-label';
    label.textContent = labelText;
    label.title = labelText;

    var countEl = document.createElement('span');
    countEl.className = 'filter-check-count';
    countEl.textContent = count;

    row.appendChild(input);
    row.appendChild(box);
    row.appendChild(label);
    row.appendChild(countEl);

    input.addEventListener('change', function () { onToggle(input.checked); });
    return row;
  }

  function Navigator(dom) {
    this.perspectiveList = dom.perspectiveList;
    this.selectionBlock = dom.selectionBlock;
    this.selectionLabel = dom.selectionLabel;
    this.selectionBack = dom.selectionBack;
    this.searchWrap = dom.searchWrap;
    this.searchInput = dom.searchInput;
    this.selectionList = dom.selectionList;

    this.filtersWrap = dom.filtersWrap;
    this.filterToggle = dom.filterToggle;
    this.filterBadge = dom.filterBadge;
    this.filterPanel = dom.filterPanel;
    this.sectorChecks = dom.sectorChecks;
    this.countryChecks = dom.countryChecks;
    this.filterClear = dom.filterClear;
    this.yearMinRange = dom.yearMinRange;
    this.yearMaxRange = dom.yearMaxRange;
    this.yearMinLabel = dom.yearMinLabel;
    this.yearMaxLabel = dom.yearMaxLabel;
    this.yearSliderRange = dom.yearSliderRange;

    this.onPerspective = null;
    this.onDrill = null;
    this.onSelectScenario = null;

    this.perspective = null;
    this.drillKind = null;   // 'marker' | 'dv' | null
    this.drillKey = null;
    this.selectedScenarioId = null;

    this.selectedSectors = {};
    this.selectedCountries = {};

    this._computeYearBounds();
    this._setupYearSlider();

    this.searchInput.addEventListener('input', this._renderList.bind(this));
    this.selectionBack.addEventListener('click', this._handleBack.bind(this));
    this.filterToggle.addEventListener('click', this._toggleFilterPanel.bind(this));
    this.filterClear.addEventListener('click', this._clearFilters.bind(this));
    this.yearMinRange.addEventListener('input', this._handleYearInput.bind(this, 'min'));
    this.yearMaxRange.addEventListener('input', this._handleYearInput.bind(this, 'max'));

    this._renderPerspectives();
    this._renderSelection();
  }

  // ---- perspective ----

  Navigator.prototype._renderPerspectives = function () {
    var self = this;
    var perspectives = [
      { key: 'breach', labelKey: 'perspective.breach', hintKey: 'perspective.breachHint' },
      { key: 'markers', labelKey: 'perspective.markers', hintKey: 'perspective.markersHint' },
      { key: 'dv', labelKey: 'perspective.dv', hintKey: 'perspective.dvHint' }
    ];

    this.perspectiveList.innerHTML = '';
    perspectives.forEach(function (perspective) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'perspective-btn' + (self.perspective === perspective.key ? ' active' : '');
      btn.innerHTML =
        '<span class="perspective-label">' + KDQ.i18n.t(perspective.labelKey) + '</span>' +
        '<span class="perspective-hint">' + KDQ.i18n.t(perspective.hintKey) + '</span>';
      btn.addEventListener('click', function () { self.selectPerspective(perspective.key); });
      self.perspectiveList.appendChild(btn);
    });
  };

  Navigator.prototype.selectPerspective = function (key) {
    this.perspective = key;
    this.drillKind = null;
    this.drillKey = null;
    this.selectedScenarioId = null;
    this.searchInput.value = '';
    this._resetFilterState();

    this._renderPerspectives();
    this._renderSelection();

    if (typeof this.onPerspective === 'function') this.onPerspective(key);
  };

  /** Back steps out of a marker/DV drill-down to that perspective's own list. */
  Navigator.prototype._handleBack = function () {
    this.drillKind = null;
    this.drillKey = null;
    this.selectedScenarioId = null;
    this.searchInput.value = '';
    this._resetFilterState();
    this._renderSelection();
    if (typeof this.onPerspective === 'function') this.onPerspective(this.perspective);
  };

  Navigator.prototype._drillInto = function (kind, key) {
    this.drillKind = kind;
    this.drillKey = key;
    this.selectedScenarioId = null;
    this.searchInput.value = '';
    this._resetFilterState();
    this._renderSelection();
    if (typeof this.onDrill === 'function') this.onDrill(kind, key);
  };

  // ---- filters ----

  Navigator.prototype._computeYearBounds = function () {
    var years = KDQ.getScenarios()
      .map(function (s) { return s.year; })
      .filter(function (y) { return y != null; });
    this.yearBounds = years.length
      ? { min: Math.min.apply(null, years), max: Math.max.apply(null, years) }
      : { min: 2000, max: 2025 };
  };

  Navigator.prototype._setupYearSlider = function () {
    [this.yearMinRange, this.yearMaxRange].forEach(function (input) {
      input.min = this.yearBounds.min;
      input.max = this.yearBounds.max;
    }, this);
    this.yearMinRange.value = this.yearBounds.min;
    this.yearMaxRange.value = this.yearBounds.max;
    this._updateYearVisual();
  };

  Navigator.prototype._handleYearInput = function (which) {
    var min = Number(this.yearMinRange.value);
    var max = Number(this.yearMaxRange.value);
    // Keep the handles from crossing over each other.
    if (which === 'min') { this.yearMinRange.value = Math.min(min, max); }
    else { this.yearMaxRange.value = Math.max(max, min); }
    this._updateYearVisual();
    this._updateFilterBadge();
    this._renderList();
  };

  Navigator.prototype._updateYearVisual = function () {
    var span = this.yearBounds.max - this.yearBounds.min || 1;
    var minPct = (Number(this.yearMinRange.value) - this.yearBounds.min) / span * 100;
    var maxPct = (Number(this.yearMaxRange.value) - this.yearBounds.min) / span * 100;
    this.yearSliderRange.style.left = minPct + '%';
    this.yearSliderRange.style.right = (100 - maxPct) + '%';
    this.yearMinLabel.textContent = this.yearMinRange.value;
    this.yearMaxLabel.textContent = this.yearMaxRange.value;
  };

  Navigator.prototype._yearNarrowed = function () {
    return Number(this.yearMinRange.value) !== this.yearBounds.min ||
           Number(this.yearMaxRange.value) !== this.yearBounds.max;
  };

  Navigator.prototype._resetFilterState = function () {
    this.selectedSectors = {};
    this.selectedCountries = {};
    this.yearMinRange.value = this.yearBounds.min;
    this.yearMaxRange.value = this.yearBounds.max;
    this._updateYearVisual();
    this._updateFilterBadge();
  };

  Navigator.prototype._clearFilters = function () {
    this._resetFilterState();
    this._renderFilterOptions();
    this._renderList();
  };

  Navigator.prototype._toggleFilterPanel = function () {
    var collapsed = this.filterPanel.classList.toggle('collapsed');
    this.filterToggle.classList.toggle('open', !collapsed);
  };

  Navigator.prototype._updateFilterBadge = function () {
    var count = countSelected(this.selectedSectors) + countSelected(this.selectedCountries) +
      (this._yearNarrowed() ? 1 : 0);
    this.filterBadge.textContent = count > 0 ? count : '';
    this.filterBadge.classList.toggle('hidden', count === 0);
  };

  /** Everything in scope before search and the filters — i.e. the drill-down only. */
  Navigator.prototype._scopedScenarios = function () {
    var self = this;
    return KDQ.getScenarios().filter(function (scenario) {
      if (self.drillKind === 'marker') {
        var codes = [scenario.primaryMarker].concat(scenario.secondaryMarkers || []);
        return codes.indexOf(self.drillKey) !== -1;
      }
      if (self.drillKind === 'dv') return (scenario.resultKey || 'none') === self.drillKey;
      return true;
    });
  };

  /** Distinct values of a multi-value field within the current scope, with counts. */
  function tally(scenarios, field) {
    var counts = {};
    scenarios.forEach(function (scenario) {
      (scenario[field] || []).forEach(function (value) {
        counts[value] = (counts[value] || 0) + 1;
      });
    });
    return Object.keys(counts)
      .sort(function (a, b) { return counts[b] - counts[a] || a.localeCompare(b); })
      .map(function (value) { return { value: value, count: counts[value] }; });
  }

  Navigator.prototype._renderFilterOptions = function () {
    var self = this;
    var scoped = this._scopedScenarios();

    function fill(container, field, selectedMap) {
      container.innerHTML = '';
      tally(scoped, field).forEach(function (item) {
        container.appendChild(buildCheckRow(item.value, item.count, selectedMap[item.value], function (checked) {
          selectedMap[item.value] = checked;
          self._updateFilterBadge();
          self._renderList();
        }));
      });
    }

    fill(this.sectorChecks, 'sectors', this.selectedSectors);
    fill(this.countryChecks, 'countries', this.selectedCountries);
    this._updateFilterBadge();
  };

  Navigator.prototype._passesFilters = function (scenario) {
    if (hasSelection(this.selectedSectors)) {
      var sectors = scenario.sectors || [];
      if (!sectors.some(function (s) { return this.selectedSectors[s]; }, this)) return false;
    }
    if (hasSelection(this.selectedCountries)) {
      var countries = scenario.countries || [];
      if (!countries.some(function (c) { return this.selectedCountries[c]; }, this)) return false;
    }
    // A case with no recorded year is only excluded once the range is narrowed.
    if (this._yearNarrowed()) {
      if (scenario.year == null) return false;
      if (scenario.year < Number(this.yearMinRange.value)) return false;
      if (scenario.year > Number(this.yearMaxRange.value)) return false;
    }
    return true;
  };

  // ---- selection lists ----

  Navigator.prototype._renderSelection = function () {
    if (!this.perspective) {
      this.selectionBlock.classList.add('hidden');
      return;
    }
    this.selectionBlock.classList.remove('hidden');

    this.selectionLabel.textContent = KDQ.i18n.t(this._selectionLabelKey());
    this.selectionBack.classList.toggle('hidden', !this.drillKind);
    if (this.drillKind) this.selectionBack.textContent = KDQ.i18n.t(this._backLabelKey());

    // Marker and DV root lists are short and fixed; only breach lists
    // get the search box and the filters.
    var showingBreaches = this._isShowingBreaches();
    this.searchWrap.classList.toggle('hidden', !showingBreaches);
    this.filtersWrap.classList.toggle('hidden', !showingBreaches);
    if (showingBreaches) this._renderFilterOptions();

    this._renderList();
  };

  Navigator.prototype._isShowingBreaches = function () {
    return this.perspective === 'breach' || !!this.drillKind;
  };

  Navigator.prototype._selectionLabelKey = function () {
    if (this.drillKind) return 'nav.selectBreach';
    if (this.perspective === 'markers') return 'nav.selectMarker';
    if (this.perspective === 'dv') return 'nav.selectDv';
    return 'nav.selectBreach';
  };

  Navigator.prototype._backLabelKey = function () {
    return this.drillKind === 'marker' ? 'nav.backToMarkers' : 'nav.backToDvTypes';
  };

  Navigator.prototype._renderList = function () {
    this.selectionList.innerHTML = '';
    if (this.perspective === 'markers' && !this.drillKind) return this._renderMarkerList();
    if (this.perspective === 'dv' && !this.drillKind) return this._renderDvList();
    return this._renderBreachList();
  };

  Navigator.prototype._renderMarkerList = function () {
    var self = this;
    KDQ.getMarkerCodes().forEach(function (code) {
      var marker = KDQ.getMarker(code);
      var row = document.createElement('button');
      row.type = 'button';
      row.className = 'selection-row';
      row.innerHTML =
        '<span class="selection-row-name">' + code + ' — ' + marker.label + '</span>' +
        '<span class="selection-row-meta">' + countLabel(markerCount(code)) + '</span>';
      row.addEventListener('click', function () { self._drillInto('marker', code); });
      self.selectionList.appendChild(row);
    });
  };

  Navigator.prototype._renderDvList = function () {
    var self = this;
    DV_ORDER.forEach(function (key) {
      var relationship = KDQ.getRelationship(key);
      var row = document.createElement('button');
      row.type = 'button';
      row.className = 'selection-row';
      row.innerHTML =
        '<span class="selection-row-name">' + relationship.title + '</span>' +
        '<span class="selection-row-meta">' + countLabel(dvCount(key)) + '</span>';
      row.addEventListener('click', function () { self._drillInto('dv', key); });
      self.selectionList.appendChild(row);
    });
  };

  Navigator.prototype._matchingScenarios = function () {
    var self = this;
    var query = this.searchInput.value.trim().toLowerCase();

    return this._scopedScenarios().filter(function (scenario) {
      if (!self._passesFilters(scenario)) return false;
      if (query && KDQ.i18n.tr(scenario.name).toLowerCase().indexOf(query) === -1) return false;
      return true;
    }).sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
  };

  Navigator.prototype._renderBreachList = function () {
    var self = this;
    var matches = this._matchingScenarios();

    if (!matches.length) {
      var empty = document.createElement('p');
      empty.className = 'selection-empty';
      empty.textContent = KDQ.i18n.t('scenario.noResults');
      this.selectionList.appendChild(empty);
      return;
    }

    matches.forEach(function (scenario) {
      var relationship = KDQ.getRelationship(scenario.resultKey || 'none');
      var row = document.createElement('button');
      row.type = 'button';
      row.className = 'selection-row' + (self.selectedScenarioId === scenario.id ? ' selected' : '');
      row.innerHTML =
        '<span class="selection-row-name">' + KDQ.i18n.tr(scenario.name) + '</span>' +
        '<span class="selection-row-meta">' + scenario.primaryMarker + ' — ' + relationship.label + '</span>';
      row.addEventListener('click', function () {
        self.selectedScenarioId = scenario.id;
        self._renderList();
        if (typeof self.onSelectScenario === 'function') self.onSelectScenario(scenario);
      });
      self.selectionList.appendChild(row);
    });
  };

  /** Jumps straight to a marker's breach list — used by the marker links inside a case. */
  Navigator.prototype.showMarker = function (code) {
    this.perspective = 'markers';
    this._renderPerspectives();
    this._drillInto('marker', code);
  };

  Navigator.prototype.reset = function () {
    this.perspective = null;
    this.drillKind = null;
    this.drillKey = null;
    this.selectedScenarioId = null;
    this.searchInput.value = '';
    this._resetFilterState();
    this._renderPerspectives();
    this._renderSelection();
  };

  /** Re-renders labels in the current language, keeping the current position. */
  Navigator.prototype.refresh = function () {
    this._renderPerspectives();
    this._renderSelection();
  };

  KDQ.Navigator = Navigator;

})(window.KDQ = window.KDQ || {});
