(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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
 * @name storm-textarea: Auto resize textareas to fit value
 * @version 1.1.0: Sun, 27 May 2018 19:35:39 GMT
 * @author stormid
 * @license MIT
 */
var defaults = {
	events: ['input']
};

function update(_ref) {
	var target = _ref.target;

	target.style.height = 'auto';
	target.style.height = target.scrollHeight + 'px';
}

function init(elements, settings) {
	if (typeof elements === 'string') {
		elements = document.querySelectorAll(elements);
	}

	var events = settings && settings.events || defaults.events;
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var element = _step.value;
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = events[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var event = _step2.value;

					element.addEventListener(event, update);
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			update({ target: element });
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}

exports.default = { init: init };

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLXRleHRhcmVhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7Ozs7QUFFQSxJQUFNLDJCQUEyQixZQUFBO1dBQU0sd0JBQUEsQUFBUyxLQUFmLEFBQU0sQUFBYztBQUFyRCxBQUFnQyxDQUFBOztBQUVoQyxJQUFHLHNCQUFILEFBQXlCLGVBQVEsQUFBTyxpQkFBUCxBQUF3QixvQkFBb0IsWUFBTSxBQUFFOzRCQUFBLEFBQXdCLFFBQVEsVUFBQSxBQUFDLElBQUQ7ZUFBQSxBQUFRO0FBQXhDLEFBQWdEO0FBQXBHLENBQUE7Ozs7Ozs7O0FDSmpDOzs7Ozs7QUFNQSxJQUFNO1NBQ0csQ0FEVCxBQUFpQixBQUNSLEFBQ1A7QUFGZSxBQUNoQjs7QUFLRCxTQUFBLEFBQVMsYUFBaUI7S0FBVCxBQUFTLGNBQVQsQUFBUyxBQUN6Qjs7UUFBQSxBQUFPLE1BQVAsQUFBYSxTQUFiLEFBQXNCLEFBQ3RCO1FBQUEsQUFBTyxNQUFQLEFBQWEsU0FBVSxPQUFBLEFBQU8sZUFBOUIsQUFBNkMsQUFDN0M7OztBQUVELFNBQUEsQUFBUyxLQUFULEFBQWUsVUFBZixBQUF5QixVQUFVLEFBQ2xDO0tBQUksT0FBQSxBQUFPLGFBQVgsQUFBd0IsVUFBVSxBQUNqQzthQUFXLFNBQUEsQUFBUyxpQkFBcEIsQUFBVyxBQUEwQixBQUNyQztBQUVEOztLQUFNLFNBQVMsWUFBWSxTQUFaLEFBQXFCLFVBQVUsU0FMWixBQUtsQyxBQUF1RDtpQ0FMckI7eUJBQUE7c0JBQUE7O0tBTWxDO3VCQUFBLEFBQXNCLHNJQUFVO09BQXJCLEFBQXFCLGdCQUFBO29DQUFBOzRCQUFBO3lCQUFBOztPQUMvQjswQkFBQSxBQUFvQix5SUFBUTtTQUFqQixBQUFpQixlQUMzQjs7YUFBQSxBQUFRLGlCQUFSLEFBQXlCLE9BQXpCLEFBQWdDLEFBQ2hDO0FBSDhCO2lCQUFBO3lCQUFBO3NCQUFBO2FBQUE7UUFBQTsyREFBQTtpQkFBQTtBQUFBO2NBQUE7NkJBQUE7WUFBQTtBQUFBO0FBQUE7QUFJL0I7O1VBQU8sRUFBQyxRQUFSLEFBQU8sQUFBUyxBQUNoQjtBQVhpQztlQUFBO3NCQUFBO21CQUFBO1dBQUE7TUFBQTt1REFBQTtjQUFBO0FBQUE7WUFBQTswQkFBQTtVQUFBO0FBQUE7QUFBQTtBQVlsQzs7O2tCQUVjLEVBQUUsTSxBQUFGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCJpbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9saWJzL3N0b3JtLXRleHRhcmVhJztcblxuY29uc3Qgb25ET01Db250ZW50TG9hZGVkVGFza3MgPSBbKCkgPT4gVGV4dGFyZWEuaW5pdCgnLmpzLXRleHRhcmVhJyldO1xuICAgIFxuaWYoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7IG9uRE9NQ29udGVudExvYWRlZFRhc2tzLmZvckVhY2goKGZuKSA9PiBmbigpKTsgfSk7IiwiLyoqXG4gKiBAbmFtZSBzdG9ybS10ZXh0YXJlYTogQXV0byByZXNpemUgdGV4dGFyZWFzIHRvIGZpdCB2YWx1ZVxuICogQHZlcnNpb24gMS4xLjA6IFN1biwgMjcgTWF5IDIwMTggMTk6MzU6MzkgR01UXG4gKiBAYXV0aG9yIHN0b3JtaWRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5jb25zdCBkZWZhdWx0cyA9IHtcblx0ZXZlbnRzOiBbXG5cdFx0J2lucHV0J1xuXHRdXG59O1xuXG5mdW5jdGlvbiB1cGRhdGUoe3RhcmdldH0pIHtcblx0dGFyZ2V0LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcblx0dGFyZ2V0LnN0eWxlLmhlaWdodCA9ICB0YXJnZXQuc2Nyb2xsSGVpZ2h0ICsgJ3B4Jztcbn1cblxuZnVuY3Rpb24gaW5pdCAoZWxlbWVudHMsIHNldHRpbmdzKSB7XG5cdGlmICh0eXBlb2YgZWxlbWVudHMgPT09ICdzdHJpbmcnKSB7XG5cdFx0ZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRzKTtcblx0fVxuXG5cdGNvbnN0IGV2ZW50cyA9IHNldHRpbmdzICYmIHNldHRpbmdzLmV2ZW50cyB8fCBkZWZhdWx0cy5ldmVudHM7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuXHRcdGZvciAoY29uc3QgZXZlbnQgb2YgZXZlbnRzKSB7XG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHVwZGF0ZSk7XG5cdFx0fVxuXHRcdHVwZGF0ZSh7dGFyZ2V0OiBlbGVtZW50fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH0iXX0=
