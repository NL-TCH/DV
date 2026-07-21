/**
 * MarkersOverview lists every risk marker (M1-M11) as a filter
 * checkbox — full marker name, never just the code — with a
 * scenario-count badge. Selecting one or more markers (multi-select,
 * OR-match) shows the matching scenarios inline, right below the
 * checklist — no tab jump needed.
 */
(function (KDQ) {
  'use strict';

  var MARKER_ORDER = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11'];

  function MarkersOverview(dom) {
    this.checkContainer = dom.checkContainer;
    this.listContainer = dom.listContainer;
    this.onSelect = null;
    this.selected = {};

    this._renderChecks();
    this._renderList();
  }

  MarkersOverview.prototype._hasSelection = function () {
    return Object.keys(this.selected).some(function (code) { return this.selected[code]; }, this);
  };

  MarkersOverview.prototype._renderChecks = function () {
    var self = this;
    this.checkContainer.innerHTML = '';

    MARKER_ORDER.forEach(function (code) {
      var row = KDQ.buildMarkerCheckRow(code, self.selected[code], function (checked) {
        self.selected[code] = checked;
        self._renderList();
      });
      self.checkContainer.appendChild(row);
    });
  };

  MarkersOverview.prototype._renderList = function () {
    var self = this;
    this.listContainer.innerHTML = '';

    if (!this._hasSelection()) {
      var hint = document.createElement('p');
      hint.className = 'marker-empty-hint';
      hint.textContent = KDQ.i18n.t('markers.selectPrompt');
      this.listContainer.appendChild(hint);
      return;
    }

    var matches = KDQ.getScenarios().filter(function (s) {
      var all = [s.primaryMarker].concat(s.secondaryMarkers || []);
      return all.some(function (code) { return self.selected[code]; });
    });

    if (!matches.length) {
      KDQ.renderEmptyScenarioNotice(this.listContainer);
      return;
    }

    matches.forEach(function (scenario) {
      self.listContainer.appendChild(KDQ.buildScenarioRow(scenario, self.onSelect ? function (s) { self.onSelect(s); } : null));
    });
  };

  /** Re-renders in the current language (definitions/counts don't change, but labels might). */
  MarkersOverview.prototype.refresh = function () {
    this._renderChecks();
    this._renderList();
  };

  KDQ.MarkersOverview = MarkersOverview;

})(window.KDQ = window.KDQ || {});
