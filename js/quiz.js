/**
 * QuizEngine holds question/answer state only — no DOM access.
 * QuizView renders that state and turns DOM events into engine calls.
 */
(function (KDQ) {
  'use strict';

  function QuizEngine(questions) {
    this.questions = questions;
    this.index = 0;
    this.answers = {};
  }

  QuizEngine.prototype.currentQuestion = function () {
    return this.questions[this.index];
  };

  QuizEngine.prototype.currentAnswer = function () {
    return this.answers[this.currentQuestion().id];
  };

  QuizEngine.prototype.select = function (value) {
    this.answers[this.currentQuestion().id] = value;
  };

  QuizEngine.prototype.isFirst = function () {
    return this.index === 0;
  };

  QuizEngine.prototype.isLast = function () {
    return this.index === this.questions.length - 1;
  };

  QuizEngine.prototype.canAdvance = function () {
    return !!this.currentAnswer();
  };

  QuizEngine.prototype.goNext = function () {
    if (!this.isLast()) this.index += 1;
  };

  QuizEngine.prototype.goBack = function () {
    if (!this.isFirst()) this.index -= 1;
  };

  QuizEngine.prototype.reset = function () {
    this.index = 0;
    this.answers = {};
  };

  function QuizView(engine, dom) {
    this.engine = engine;
    this.dom = dom;
    this.onComplete = null;

    this.dom.btnNext.addEventListener('click', this._handleNext.bind(this));
    this.dom.btnBack.addEventListener('click', this._handleBack.bind(this));
  }

  QuizView.prototype._handleNext = function () {
    if (!this.engine.canAdvance()) return;
    if (this.engine.isLast()) {
      if (typeof this.onComplete === 'function') this.onComplete();
      return;
    }
    this.engine.goNext();
    this.render();
  };

  QuizView.prototype._handleBack = function () {
    this.engine.goBack();
    this.render();
  };

  QuizView.prototype.render = function () {
    var engine = this.engine;
    var dom = this.dom;
    var question = engine.currentQuestion();
    var total = engine.questions.length;
    var stepNumber = engine.index + 1;

    dom.stepLabel.textContent = KDQ.i18n.t('step.counter') + ' 0' + stepNumber + ' — 0' + total;
    dom.progressFill.style.width = (stepNumber / total * 100) + '%';
    dom.qTitle.textContent = KDQ.i18n.tr(question.text);
    dom.qOptions.innerHTML = '';

    var selected = engine.currentAnswer();

    question.options.forEach(function (option) {
      var row = document.createElement('button');
      row.type = 'button';
      row.className = 'option-row' + (selected === option.value ? ' selected' : '');
      row.innerHTML = '<span class="marker"></span><span>' + KDQ.i18n.tr(option.label) + '</span>';
      row.addEventListener('click', function () {
        engine.select(option.value);
        this.render();
      }.bind(this));
      dom.qOptions.appendChild(row);
    }, this);

    dom.btnBack.disabled = engine.isFirst();
    dom.btnNext.disabled = !engine.canAdvance();
    dom.btnNext.textContent = engine.isLast() ? KDQ.i18n.t('nav.seeResult') : KDQ.i18n.t('nav.next');
    dom.btnBack.textContent = KDQ.i18n.t('nav.back');
  };

  KDQ.QuizEngine = QuizEngine;
  KDQ.QuizView = QuizView;

})(window.KDQ = window.KDQ || {});
