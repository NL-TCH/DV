/**
 * Minimal i18n core. Adding a language: add it to SUPPORTED_LANGS,
 * add its key to every entry in data/strings.js and every {nl, en}
 * field in data/content.js, and add a button in the language
 * switcher markup (index.html) + js/lang-switch.js.
 */
(function (KDQ) {
  'use strict';

  var SUPPORTED_LANGS = ['nl', 'en'];
  var DEFAULT_LANG = 'nl';
  var STORAGE_KEY = 'kdq-lang';

  var current = null;
  var listeners = [];

  function detectInitialLang() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED_LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) { /* localStorage unavailable — fall back silently */ }
    return DEFAULT_LANG;
  }

  KDQ.i18n = {
    SUPPORTED_LANGS: SUPPORTED_LANGS,

    getLang: function () {
      if (!current) current = detectInitialLang();
      return current;
    },

    setLang: function (lang) {
      if (SUPPORTED_LANGS.indexOf(lang) === -1 || lang === KDQ.i18n.getLang()) return;
      current = lang;
      try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
      listeners.forEach(function (fn) { fn(lang); });
    },

    onChange: function (fn) {
      listeners.push(fn);
    },

    /** Static UI string by key from data/strings.js, e.g. i18n.t('nav.next'). */
    t: function (key) {
      var entry = KDQ.STRINGS[key];
      if (!entry) return key;
      return entry[KDQ.i18n.getLang()] || entry[DEFAULT_LANG] || key;
    },

    /** Translatable content field, e.g. i18n.tr(question.text) where text = {nl:'', en:''}. */
    tr: function (field) {
      if (field == null) return '';
      if (typeof field === 'string') return field;
      return field[KDQ.i18n.getLang()] || field[DEFAULT_LANG] || '';
    }
  };

  /** Applies data-i18n="key" text content to every matching element under root. */
  KDQ.applyStaticStrings = function (root) {
    var nodes = root.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = KDQ.i18n.t(nodes[i].getAttribute('data-i18n'));
    }
  };

})(window.KDQ = window.KDQ || {});
