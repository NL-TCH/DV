/**
 * Wires QuizEngine + QuizView + ScenarioPicker + AnswerSummary +
 * QuadrantDiagram + LanguageSwitch together and switches between the
 * question view and the result view.
 *
 * Two paths lead to a result:
 * - the manual quiz: answers are scored through KDQ.resolveResultKey.
 * - a researched scenario: its "resultKey" is the classification the
 *   research already assigned, used as-is (see data/content.js).
 *
 * On a language change, the app re-renders whichever view is
 * currently active instead of reloading, so state (quiz progress or
 * the shown result) survives the switch.
 */
(function (KDQ) {
  'use strict';

  function App(root) {
    this.root = root;
    this.questionView = root.querySelector('#questionView');
    this.resultView = root.querySelector('#resultView');
    this._activeRelationshipKey = null;

    this.engine = new KDQ.QuizEngine(KDQ.getQuestions());
    this.quizView = new KDQ.QuizView(this.engine, {
      stepLabel: root.querySelector('#stepLabel'),
      progressFill: root.querySelector('#progressFill'),
      qTitle: root.querySelector('#qTitle'),
      qOptions: root.querySelector('#qOptions'),
      btnBack: root.querySelector('#btnBack'),
      btnNext: root.querySelector('#btnNext')
    });

    this.scenarioPicker = new KDQ.ScenarioPicker(root.querySelector('#scenarioSelect'));

    this.answerSummary = new KDQ.AnswerSummary({
      sourceTag: root.querySelector('#answerSourceTag'),
      container: root.querySelector('#answerContainer'),
      markerContainer: root.querySelector('#markerPanel'),
      rationaleContainer: root.querySelector('#rationaleBlock')
    });

    this.layoutEl = root.querySelector('.layout');
    this.markersPanelSection = root.querySelector('#markersPanelSection');

    this.diagram = new KDQ.QuadrantDiagram({
      resultGroup: root.querySelector('#resultGroup'),
      labelGroup: root.querySelector('#resultLabelGroup'),
      resultTag: root.querySelector('#resultTag'),
      resultSwatch: root.querySelector('#resultSwatch'),
      resultTagText: root.querySelector('#resultTagText')
    });

    this.resultTitle = root.querySelector('#resultTitle');
    this.resultText = root.querySelector('#resultText');
    this.btnRestart = root.querySelector('#btnRestart');

    this.languageSwitch = new KDQ.LanguageSwitch(root.querySelector('#langSwitch'));

    this.quizView.onComplete = function () {
      var answers = Object.assign({}, this.engine.answers);
      this.showResult(KDQ.resolveResultKey(answers), { source: 'quiz', answers: answers });
    }.bind(this);

    this.scenarioPicker.onSelect = function (scenario) {
      this.showResult(scenario.resultKey || 'none', { source: 'scenario', scenario: scenario });
    }.bind(this);

    this.btnRestart.addEventListener('click', this.restart.bind(this));

    KDQ.i18n.onChange(this._handleLanguageChange.bind(this));

    this._applyDocumentStrings();
    this.quizView.render();
  }

  App.prototype.showResult = function (relationshipKey, meta) {
    this._activeRelationshipKey = relationshipKey;
    this._activeMeta = meta;

    var relationship = KDQ.getRelationship(relationshipKey);

    this.questionView.classList.add('hidden');
    this.resultView.classList.remove('hidden');

    this.answerSummary.render(meta);
    this.resultTitle.textContent = relationship.title;
    this.resultText.textContent = KDQ.i18n.tr(relationship.text);

    this.diagram.reveal(relationship);

    // Only a researched scenario has a rationale + risk markers to show,
    // so the third column only appears for that path.
    var showThirdColumn = meta.source === 'scenario';
    this.layoutEl.classList.toggle('three-col', showThirdColumn);
    this.markersPanelSection.classList.toggle('hidden', !showThirdColumn);
  };

  App.prototype.restart = function () {
    this._activeRelationshipKey = null;
    this._activeMeta = null;

    this.engine.reset();
    this.scenarioPicker.reset();
    this.diagram.reset();
    this.resultView.classList.add('hidden');
    this.questionView.classList.remove('hidden');
    this.layoutEl.classList.remove('three-col');
    this.markersPanelSection.classList.add('hidden');
    this.quizView.render();
  };

  App.prototype._applyDocumentStrings = function () {
    KDQ.applyStaticStrings(this.root);
    document.title = KDQ.i18n.t('meta.title');
    document.documentElement.lang = KDQ.i18n.getLang();
  };

  App.prototype._handleLanguageChange = function () {
    this._applyDocumentStrings();
    this.scenarioPicker.refresh();

    if (this._activeRelationshipKey) {
      // Re-render the currently shown result in the new language.
      this.showResult(this._activeRelationshipKey, this._activeMeta);
    } else {
      this.quizView.render();
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    new App(document);
  });

})(window.KDQ = window.KDQ || {});
