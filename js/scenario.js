/**
 * ScenarioBrowser renders the researched breach cases as a real,
 * visible-state filter: free-text search, a sort control, a
 * collapsible multi-select risk-marker checklist (full marker names,
 * not codes — OR-match), a collapsible DV-type checklist (OR-match)
 * and a dual-handle year range slider. Picking a scenario reports it
 * via onSelect(scenario).
 *
 * KDQ.buildScenarioRow and KDQ.buildFilterCheckRow/buildMarkerCheckRow
 * are exported so markers-overview.js can reuse the same row/checkbox
 * markup.
 */
(function (KDQ) {
  'use strict';

  KDQ.buildScenarioRow = function (scenario, onSelect) {
    var relationship = KDQ.getRelationship(scenario.resultKey || 'none');

    var row = document.createElement('button');
    row.type = 'button';
    row.className = 'scenario-row';
    row.innerHTML =
      '<span class="scenario-row-name">' + KDQ.i18n.tr(scenario.name) + '</span>' +
      '<span class="scenario-row-meta">' + scenario.primaryMarker + ' — ' + relationship.label + '</span>';
    row.addEventListener('click', function () {
      if (typeof onSelect === 'function') onSelect(scenario);
    });
    return row;
  };

  KDQ.renderEmptyScenarioNotice = function (container) {
    var empty = document.createElement('p');
    empty.className = 'scenario-empty';
    empty.textContent = KDQ.i18n.t('scenario.noResults');
    container.appendChild(empty);
  };

  /** A single filter checkbox row: full label text (never an abbreviation) + a count. */
  KDQ.buildFilterCheckRow = function (labelText, count, isSelected, onToggle) {
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

    var countEl = document.createElement('span');
    countEl.className = 'filter-check-count';
    countEl.textContent = count;

    row.appendChild(input);
    row.appendChild(box);
    row.appendChild(label);
    row.appendChild(countEl);

    input.addEventListener('change', function () {
      if (typeof onToggle === 'function') onToggle(input.checked);
    });

    return row;
  };

  KDQ.buildMarkerCheckRow = function (code, isSelected, onToggle) {
    var marker = KDQ.getMarker(code);
    var count = KDQ.getScenarios().filter(function (s) {
      return [s.primaryMarker].concat(s.secondaryMarkers || []).indexOf(code) !== -1;
    }).length;
    return KDQ.buildFilterCheckRow(code + ' — ' + marker.label, count, isSelected, onToggle);
  };

  /** Toggles a collapsible filter group open/closed; returns a fn to update its selected-count badge. */
  function wireCollapsibleGroup(toggleBtn, listEl, badgeEl) {
    toggleBtn.addEventListener('click', function () {
      var collapsed = listEl.classList.toggle('collapsed');
      toggleBtn.classList.toggle('open', !collapsed);
    });
    return function (count) {
      badgeEl.textContent = count > 0 ? count : '';
      badgeEl.classList.toggle('hidden', count === 0);
    };
  }

  var MARKER_ORDER = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11'];
  var TYPE_ORDER = ['leadership', 'execution', 'expertise-leadership', 'expertise-execution', 'none'];

  function ScenarioBrowser(dom) {
    this.searchInput = dom.searchInput;
    this.sortSelect = dom.sortSelect;
    this.markerToggle = dom.markerToggle;
    this.markerChecks = dom.markerChecks;
    this.typeToggle = dom.typeToggle;
    this.typeChecks = dom.typeChecks;
    this.yearMinRange = dom.yearMinRange;
    this.yearMaxRange = dom.yearMaxRange;
    this.yearMinLabel = dom.yearMinLabel;
    this.yearMaxLabel = dom.yearMaxLabel;
    this.yearSliderRange = dom.yearSliderRange;
    this.listContainer = dom.listContainer;
    this.onSelect = null;

    this.selectedMarkers = {};
    this.selectedTypes = {};

    this._updateMarkerBadge = wireCollapsibleGroup(this.markerToggle, this.markerChecks, dom.markerBadge);
    this._updateTypeBadge = wireCollapsibleGroup(this.typeToggle, this.typeChecks, dom.typeBadge);

    this.sortSelect.setAttribute('aria-label', KDQ.i18n.t('scenario.sortAriaLabel'));
    this._computeYearBounds();
    this._setupYearSlider();
    this._renderMarkerChecks();
    this._renderTypeChecks();

    this.searchInput.addEventListener('input', this._render.bind(this));
    this.sortSelect.addEventListener('change', this._render.bind(this));
    this.yearMinRange.addEventListener('input', this._handleYearMinInput.bind(this));
    this.yearMaxRange.addEventListener('input', this._handleYearMaxInput.bind(this));

    this._render();
  }

  ScenarioBrowser.prototype._computeYearBounds = function () {
    var years = KDQ.getScenarios()
      .map(function (s) { return s.year; })
      .filter(function (y) { return y != null; });
    this.yearBounds = {
      min: Math.min.apply(null, years),
      max: Math.max.apply(null, years)
    };
  };

  ScenarioBrowser.prototype._setupYearSlider = function () {
    this.yearMinRange.min = this.yearBounds.min;
    this.yearMinRange.max = this.yearBounds.max;
    this.yearMaxRange.min = this.yearBounds.min;
    this.yearMaxRange.max = this.yearBounds.max;
    this.yearMinRange.value = this.yearBounds.min;
    this.yearMaxRange.value = this.yearBounds.max;
    this._updateYearSliderVisual();
  };

  ScenarioBrowser.prototype._handleYearMinInput = function () {
    var minVal = Math.min(Number(this.yearMinRange.value), Number(this.yearMaxRange.value));
    this.yearMinRange.value = minVal;
    this._updateYearSliderVisual();
    this._render();
  };

  ScenarioBrowser.prototype._handleYearMaxInput = function () {
    var maxVal = Math.max(Number(this.yearMaxRange.value), Number(this.yearMinRange.value));
    this.yearMaxRange.value = maxVal;
    this._updateYearSliderVisual();
    this._render();
  };

  ScenarioBrowser.prototype._updateYearSliderVisual = function () {
    var span = this.yearBounds.max - this.yearBounds.min || 1;
    var minPct = (Number(this.yearMinRange.value) - this.yearBounds.min) / span * 100;
    var maxPct = (Number(this.yearMaxRange.value) - this.yearBounds.min) / span * 100;
    this.yearSliderRange.style.left = minPct + '%';
    this.yearSliderRange.style.right = (100 - maxPct) + '%';
    this.yearMinLabel.textContent = this.yearMinRange.value;
    this.yearMaxLabel.textContent = this.yearMaxRange.value;
  };

  ScenarioBrowser.prototype._renderMarkerChecks = function () {
    var self = this;
    this.markerChecks.innerHTML = '';

    MARKER_ORDER.forEach(function (code) {
      var row = KDQ.buildMarkerCheckRow(code, self.selectedMarkers[code], function (checked) {
        self.selectedMarkers[code] = checked;
        self._updateMarkerBadge(self._countSelected(self.selectedMarkers));
        self._render();
      });
      self.markerChecks.appendChild(row);
    });
    this._updateMarkerBadge(this._countSelected(this.selectedMarkers));
  };

  ScenarioBrowser.prototype._renderTypeChecks = function () {
    var self = this;
    this.typeChecks.innerHTML = '';

    TYPE_ORDER.forEach(function (key) {
      var relationship = KDQ.getRelationship(key);
      var count = KDQ.getScenarios().filter(function (s) { return (s.resultKey || 'none') === key; }).length;

      var row = KDQ.buildFilterCheckRow(relationship.title, count, self.selectedTypes[key], function (checked) {
        self.selectedTypes[key] = checked;
        self._updateTypeBadge(self._countSelected(self.selectedTypes));
        self._render();
      });
      self.typeChecks.appendChild(row);
    });
    this._updateTypeBadge(this._countSelected(this.selectedTypes));
  };

  ScenarioBrowser.prototype._countSelected = function (map) {
    return Object.keys(map).filter(function (key) { return map[key]; }).length;
  };

  ScenarioBrowser.prototype._hasSelection = function (map) {
    return Object.keys(map).some(function (key) { return map[key]; });
  };

  ScenarioBrowser.prototype._matchesFilters = function (scenario, query) {
    if (this._hasSelection(this.selectedMarkers)) {
      var allMarkers = [scenario.primaryMarker].concat(scenario.secondaryMarkers || []);
      var matchesMarker = allMarkers.some(function (code) { return this.selectedMarkers[code]; }, this);
      if (!matchesMarker) return false;
    }
    if (this._hasSelection(this.selectedTypes)) {
      if (!this.selectedTypes[scenario.resultKey || 'none']) return false;
    }
    if (scenario.year != null) {
      if (scenario.year < Number(this.yearMinRange.value) || scenario.year > Number(this.yearMaxRange.value)) return false;
    }
    if (query && KDQ.i18n.tr(scenario.name).toLowerCase().indexOf(query.toLowerCase()) === -1) return false;
    return true;
  };

  ScenarioBrowser.prototype._sortScenarios = function (list) {
    var sortKey = this.sortSelect.value;
    var sorted = list.slice();

    if (sortKey === 'yearAsc') {
      sorted.sort(function (a, b) { return (a.year || 0) - (b.year || 0); });
    } else if (sortKey === 'nameAsc') {
      sorted.sort(function (a, b) { return KDQ.i18n.tr(a.name).localeCompare(KDQ.i18n.tr(b.name)); });
    } else if (sortKey === 'nameDesc') {
      sorted.sort(function (a, b) { return KDQ.i18n.tr(b.name).localeCompare(KDQ.i18n.tr(a.name)); });
    } else {
      sorted.sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
    }
    return sorted;
  };

  ScenarioBrowser.prototype._render = function () {
    var self = this;
    var query = this.searchInput.value.trim();

    var matches = KDQ.getScenarios().filter(function (s) {
      return self._matchesFilters(s, query);
    });
    matches = this._sortScenarios(matches);

    this.listContainer.innerHTML = '';

    if (!matches.length) {
      KDQ.renderEmptyScenarioNotice(this.listContainer);
      return;
    }

    matches.forEach(function (scenario) {
      self.listContainer.appendChild(KDQ.buildScenarioRow(scenario, self.onSelect ? function (s) { self.onSelect(s); } : null));
    });
  };

  /** Called from a scenario result's risk-marker tags: narrow the list to just this marker. */
  ScenarioBrowser.prototype.filterByMarker = function (code) {
    this.searchInput.value = '';
    this.selectedMarkers = {};
    this.selectedMarkers[code] = true;
    this.selectedTypes = {};
    this.yearMinRange.value = this.yearBounds.min;
    this.yearMaxRange.value = this.yearBounds.max;
    this._updateYearSliderVisual();
    this._renderMarkerChecks();
    this._renderTypeChecks();
    this._render();
  };

  ScenarioBrowser.prototype.reset = function () {
    this.searchInput.value = '';
    this.selectedMarkers = {};
    this.selectedTypes = {};
    this.yearMinRange.value = this.yearBounds.min;
    this.yearMaxRange.value = this.yearBounds.max;
    this._updateYearSliderVisual();
    this._renderMarkerChecks();
    this._renderTypeChecks();
    this._render();
  };

  /** Rebuilds check-row labels/tooltips and reapplies the current filters (language change). */
  ScenarioBrowser.prototype.refresh = function () {
    this.sortSelect.setAttribute('aria-label', KDQ.i18n.t('scenario.sortAriaLabel'));
    this._renderMarkerChecks();
    this._renderTypeChecks();
    this._render();
  };

  KDQ.ScenarioBrowser = ScenarioBrowser;

})(window.KDQ = window.KDQ || {});
