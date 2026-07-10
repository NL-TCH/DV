/**
 * QuadrantDiagram draws the two dots + connecting line for a single
 * relationship onto the static SVG grid, and can reset back to empty.
 */
(function (KDQ) {
  'use strict';

  var SVG_NS = 'http://www.w3.org/2000/svg';

  function QuadrantDiagram(options) {
    this.resultGroup = options.resultGroup;
    this.labelGroup = options.labelGroup;
    this.resultTag = options.resultTag;
    this.resultSwatch = options.resultSwatch;
    this.resultTagText = options.resultTagText;
    this.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  QuadrantDiagram.prototype.reset = function () {
    this.resultGroup.innerHTML = '';
    this.labelGroup.innerHTML = '';
    this.resultTag.classList.remove('visible');
  };

  QuadrantDiagram.prototype.reveal = function (relationship) {
    this.reset();

    // "Geen DV aangetoond" carries no quadrant coordinates — leave the
    // grid empty and only surface the label pill underneath it.
    if (!relationship.from || !relationship.to) {
      this.resultSwatch.style.background = relationship.color;
      this.resultTagText.textContent = relationship.label;
      this.resultTag.classList.add('visible');
      return;
    }

    var line = this._buildLine(relationship);
    var dotFrom = this._buildDot(relationship.from, relationship.color);
    var dotTo = this._buildDot(relationship.to, relationship.color);
    var label = this._buildLabel(relationship);

    this.resultGroup.appendChild(line);
    this.resultGroup.appendChild(dotFrom);
    this.resultGroup.appendChild(dotTo);
    this.labelGroup.appendChild(label);

    this._animateIn(line, dotFrom, dotTo, relationship);

    this.resultSwatch.style.background = relationship.color;
    this.resultTagText.textContent = relationship.label;
  };

  QuadrantDiagram.prototype._buildLine = function (relationship) {
    var line = document.createElementNS(SVG_NS, 'line');
    line.setAttribute('x1', relationship.from.x);
    line.setAttribute('y1', relationship.from.y);
    line.setAttribute('x2', relationship.to.x);
    line.setAttribute('y2', relationship.to.y);
    line.setAttribute('stroke', relationship.color);
    line.setAttribute('stroke-width', 3);

    if (relationship.dash) {
      line.setAttribute('stroke-dasharray', '9 6 2 6');
      line.style.opacity = 0;
      line.style.transition = 'opacity .5s ease';
    } else {
      var length = Math.hypot(relationship.to.x - relationship.from.x, relationship.to.y - relationship.from.y);
      line.setAttribute('stroke-dasharray', length);
      line.setAttribute('stroke-dashoffset', this.reduceMotion ? 0 : length);
      line.style.transition = 'stroke-dashoffset .6s ease';
    }
    return line;
  };

  QuadrantDiagram.prototype._buildDot = function (point, color) {
    var dot = document.createElementNS(SVG_NS, 'circle');
    dot.setAttribute('cx', point.x);
    dot.setAttribute('cy', point.y);
    dot.setAttribute('r', 13);
    dot.setAttribute('fill', color);
    dot.style.transformOrigin = point.x + 'px ' + point.y + 'px';
    dot.style.transform = this.reduceMotion ? 'scale(1)' : 'scale(0)';
    dot.style.transition = 'transform .3s ease';
    return dot;
  };

  QuadrantDiagram.prototype._buildLabel = function (relationship) {
    var midX = (relationship.from.x + relationship.to.x) / 2;
    var midY = (relationship.from.y + relationship.to.y) / 2;

    var text = document.createElementNS(SVG_NS, 'text');
    text.setAttribute('x', midX);
    text.setAttribute('y', midY - 16);
    text.setAttribute('class', 'diagram-label');
    text.textContent = relationship.label;
    text.style.opacity = 0;
    text.style.transition = 'opacity .4s ease';
    return text;
  };

  QuadrantDiagram.prototype._animateIn = function (line, dotFrom, dotTo, relationship) {
    if (this.reduceMotion) {
      this.resultTag.classList.add('visible');
      this.labelGroup.firstChild.style.opacity = 1;
      return;
    }

    var label = this.labelGroup.firstChild;
    var resultTag = this.resultTag;

    requestAnimationFrame(function () {
      setTimeout(function () { dotFrom.style.transform = 'scale(1)'; }, 60);
      setTimeout(function () {
        if (relationship.dash) { line.style.opacity = 1; }
        else { line.setAttribute('stroke-dashoffset', 0); }
      }, 220);
      setTimeout(function () { dotTo.style.transform = 'scale(1)'; }, 620);
      setTimeout(function () {
        label.style.opacity = 1;
        resultTag.classList.add('visible');
      }, 750);
    });
  };

  KDQ.QuadrantDiagram = QuadrantDiagram;

})(window.KDQ = window.KDQ || {});
