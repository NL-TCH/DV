/**
 * LanguageSwitch renders one button per supported language (from
 * KDQ.i18n.SUPPORTED_LANGS) into its container and keeps the active
 * button's styling in sync with KDQ.i18n's current language.
 */
(function (KDQ) {
  'use strict';

  function LanguageSwitch(container) {
    this.container = container;
    this._build();
    KDQ.i18n.onChange(this._updateActive.bind(this));
  }

  LanguageSwitch.prototype._build = function () {
    this.container.innerHTML = '';

    KDQ.i18n.SUPPORTED_LANGS.forEach(function (lang) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'lang-btn';
      button.dataset.lang = lang;
      button.textContent = lang.toUpperCase();
      button.addEventListener('click', function () { KDQ.i18n.setLang(lang); });
      this.container.appendChild(button);
    }, this);

    this._updateActive();
  };

  LanguageSwitch.prototype._updateActive = function () {
    var current = KDQ.i18n.getLang();
    var buttons = this.container.querySelectorAll('.lang-btn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.toggle('active', buttons[i].dataset.lang === current);
    }
  };

  KDQ.LanguageSwitch = LanguageSwitch;

})(window.KDQ = window.KDQ || {});
