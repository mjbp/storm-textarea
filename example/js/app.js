(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _stormTextarea = require('./libs/storm-textarea');

var _stormTextarea2 = _interopRequireDefault(_stormTextarea);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var onDOMContentLoadedTasks = [function () {
    return _stormTextarea2.default.init('.js-textarea');
}];

if ('addEventListener' in window) window.addEventListener('DOMContentLoaded', function () {
    onDOMContentLoadedTasks.forEach(function (fn) {
        return fn();
    });
});

},{"./libs/storm-textarea":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * @name storm-textarea: Auto-resize textareas to fit value size
 * @version 0.1.1: Wed, 11 Jan 2017 17:54:10 GMT
 * @author stormid
 * @license MIT
 */

var defaults = {
	paddingBottom: 16,
	events: ['focus', 'cut', 'drop', 'keydown', 'resize', 'change']
},
    StormTextarea = {
	init: function init() {
		var _this = this;

		this.settings.events.forEach(function (evt) {
			return _this.DOMElement.addEventListener(evt, _this.resize.bind(_this));
		});
		return this;
	},
	resize: function resize() {
		;
		this.DOMElement.style.height = 'auto';
		this.DOMElement.style.height = this.DOMElement.scrollHeight + this.settings.paddingBottom + 'px';
	}
};

var init = function init(sel, opts) {
	var els = [].slice.call(document.querySelectorAll(sel));

	if (els.length === 0) throw new Error('Textarea cannot be initialised, no augmentable elements found');

	return els.map(function (el) {
		return Object.assign(Object.create(StormTextarea), {
			DOMElement: el,
			settings: Object.assign({}, defaults, opts)
		}).init();
	});
};

exports.default = { init: init };

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLXRleHRhcmVhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7Ozs7QUFFQSxJQUFNLDJCQUEyQixZQUFBO1dBQU0sd0JBQUEsQUFBUyxLQUFmLEFBQU0sQUFBYztBQUFyRCxBQUFnQyxDQUFBOztBQUVoQyxJQUFHLHNCQUFILEFBQXlCLGVBQVEsQUFBTyxpQkFBUCxBQUF3QixvQkFBb0IsWUFBTSxBQUFFOzRCQUFBLEFBQXdCLFFBQVEsVUFBQSxBQUFDLElBQUQ7ZUFBQSxBQUFRO0FBQXhDLEFBQWdEO0FBQXBHLENBQUE7Ozs7Ozs7O0FDSmpDOzs7Ozs7O0FBT0EsSUFBTTtnQkFBVyxBQUNBLEFBQ2Y7U0FBUSxDQUFBLEFBQ1AsU0FETyxBQUVQLE9BRk8sQUFHUCxRQUhPLEFBSVAsV0FKTyxBQUtQLFVBUEgsQUFBaUIsQUFFUCxBQU1QO0FBUmMsQUFDZjtJQVVEO0FBQWdCLHVCQUNSO2NBQ047O09BQUEsQUFBSyxTQUFMLEFBQWMsT0FBZCxBQUFxQixRQUFRLGVBQUE7VUFBTyxNQUFBLEFBQUssV0FBTCxBQUFnQixpQkFBaEIsQUFBaUMsS0FBSyxNQUFBLEFBQUssT0FBTCxBQUFZLEtBQXpELEFBQU87QUFBcEMsQUFDQTtTQUFBLEFBQU8sQUFDUDtBQUpjLEFBS2Y7QUFMZSwyQkFLTixBQUFDO0FBQ1Q7T0FBQSxBQUFLLFdBQUwsQUFBZ0IsTUFBaEIsQUFBc0IsU0FBdEIsQUFBK0IsQUFDL0I7T0FBQSxBQUFLLFdBQUwsQUFBZ0IsTUFBaEIsQUFBc0IsU0FBVSxLQUFBLEFBQUssV0FBTCxBQUFnQixlQUFlLEtBQUEsQUFBSyxTQUFwQyxBQUE2QyxnQkFBN0UsQUFBNkYsQUFDN0Y7QUFuQkgsQUFXaUI7QUFBQSxBQUNmOztBQVVGLElBQU0sT0FBTyxTQUFQLEFBQU8sS0FBQSxBQUFDLEtBQUQsQUFBTSxNQUFTLEFBQzNCO0tBQUksTUFBTSxHQUFBLEFBQUcsTUFBSCxBQUFTLEtBQUssU0FBQSxBQUFTLGlCQUFqQyxBQUFVLEFBQWMsQUFBMEIsQUFFbEQ7O0tBQUcsSUFBQSxBQUFJLFdBQVAsQUFBa0IsR0FBRyxNQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUVyQzs7WUFBTyxBQUFJLElBQUksY0FBTSxBQUNwQjtnQkFBTyxBQUFPLE9BQU8sT0FBQSxBQUFPLE9BQXJCLEFBQWMsQUFBYztlQUFnQixBQUN0QyxBQUNaO2FBQVUsT0FBQSxBQUFPLE9BQVAsQUFBYyxJQUFkLEFBQWtCLFVBRnRCLEFBQTRDLEFBRXhDLEFBQTRCO0FBRlksQUFDbEQsR0FETSxFQUFQLEFBQU8sQUFHSixBQUNIO0FBTEQsQUFBTyxBQU1QLEVBTk87QUFMUjs7a0JBYWUsRUFBRSxNLEFBQUYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vbGlicy9zdG9ybS10ZXh0YXJlYSc7XG5cbmNvbnN0IG9uRE9NQ29udGVudExvYWRlZFRhc2tzID0gWygpID0+IFRleHRhcmVhLmluaXQoJy5qcy10ZXh0YXJlYScpXTtcbiAgICBcbmlmKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4geyBvbkRPTUNvbnRlbnRMb2FkZWRUYXNrcy5mb3JFYWNoKChmbikgPT4gZm4oKSk7IH0pOyIsIi8qKlxuICogQG5hbWUgc3Rvcm0tdGV4dGFyZWE6IEF1dG8tcmVzaXplIHRleHRhcmVhcyB0byBmaXQgdmFsdWUgc2l6ZVxuICogQHZlcnNpb24gMC4xLjE6IFdlZCwgMTEgSmFuIDIwMTcgMTc6NTQ6MTAgR01UXG4gKiBAYXV0aG9yIHN0b3JtaWRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuXHRcdHBhZGRpbmdCb3R0b206IDE2LFxuXHRcdGV2ZW50czogW1xuXHRcdFx0J2ZvY3VzJyxcblx0XHRcdCdjdXQnLFxuXHRcdFx0J2Ryb3AnLFxuXHRcdFx0J2tleWRvd24nLFxuXHRcdFx0J3Jlc2l6ZScsXG5cdFx0XHQnY2hhbmdlJ1xuXHRcdF1cblx0fSxcblx0U3Rvcm1UZXh0YXJlYSA9IHtcblx0XHRpbml0KCkgeyBcblx0XHRcdHRoaXMuc2V0dGluZ3MuZXZlbnRzLmZvckVhY2goZXZ0ID0+IHRoaXMuRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2dCwgdGhpcy5yZXNpemUuYmluZCh0aGlzKSkpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHRyZXNpemUoKSB7O1xuXHRcdFx0dGhpcy5ET01FbGVtZW50LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcblx0XHRcdHRoaXMuRE9NRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAgdGhpcy5ET01FbGVtZW50LnNjcm9sbEhlaWdodCArIHRoaXMuc2V0dGluZ3MucGFkZGluZ0JvdHRvbSArICdweCc7XG5cdFx0fVxuXHR9O1xuXHRcbmNvbnN0IGluaXQgPSAoc2VsLCBvcHRzKSA9PiB7XG5cdGxldCBlbHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKSk7XG5cdFxuXHRpZihlbHMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ1RleHRhcmVhIGNhbm5vdCBiZSBpbml0aWFsaXNlZCwgbm8gYXVnbWVudGFibGUgZWxlbWVudHMgZm91bmQnKTtcblx0XG5cdHJldHVybiBlbHMubWFwKGVsID0+IHtcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKFN0b3JtVGV4dGFyZWEpLCB7XG5cdFx0XHRET01FbGVtZW50OiBlbCxcblx0XHRcdHNldHRpbmdzOiBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgb3B0cylcblx0XHR9KS5pbml0KCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07Il19
