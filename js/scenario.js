/**
 * ScenarioPicker fills the <select> with the researched breach cases
 * from data/content.js, grouped by their assigned DV outcome, and
 * reports a choice via onSelect(scenario).
 */
(function (KDQ) {
  'use strict';

  var GROUP_ORDER = ['leadership', 'execution', 'expertise-leadership', 'expertise-execution', 'none'];

  function ScenarioPicker(selectEl) {
    this.select = selectEl;
    this.onSelect = null;

    this._populate();
    this.select.addEventListener('change', this._handleChange.bind(this));
  }

  ScenarioPicker.prototype._populate = function () {
    this.select.innerHTML = '';

    var placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = KDQ.i18n.t('scenario.placeholder');
    this.select.appendChild(placeholder);

    var scenarios = KDQ.getScenarios();

    GROUP_ORDER.forEach(function (key) {
      var inGroup = scenarios.filter(function (s) { return (s.resultKey || 'none') === key; });
      if (!inGroup.length) return;

      var group = document.createElement('optgroup');
      group.label = key === 'none' ? KDQ.i18n.t('group.none') : KDQ.getRelationship(key).label;

      inGroup.forEach(function (scenario) {
        var option = document.createElement('option');
        option.value = scenario.id;
        option.textContent = KDQ.i18n.tr(scenario.name);
        group.appendChild(option);
      });

      this.select.appendChild(group);
    }, this);
  };

  ScenarioPicker.prototype._handleChange = function () {
    var id = this.select.value;
    if (!id) return;

    var scenario = KDQ.getScenarios().filter(function (s) { return s.id === id; })[0];
    if (scenario && typeof this.onSelect === 'function') this.onSelect(scenario);
  };

  ScenarioPicker.prototype.reset = function () {
    this.select.value = '';
  };

  /** Rebuilds the option list in the current language, keeping the selection. */
  ScenarioPicker.prototype.refresh = function () {
    var selectedId = this.select.value;
    this._populate();
    this.select.value = selectedId;
  };

  KDQ.ScenarioPicker = ScenarioPicker;

})(window.KDQ = window.KDQ || {});
