(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var _stormTextarea = require('./libs/storm-textarea');

var _stormTextarea2 = _interopRequireDefault(_stormTextarea);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var onDOMContentLoadedTasks = [function () {
    return (0, _stormTextarea2.default)('.js-textarea');
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

exports.default = function (elements, settings) {
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
};

/**
 * @name storm-textarea: Auto resize textareas to fit value
 * @version 1.1.0: Sun, 25 Mar 2018 18:39:12 GMT
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLXRleHRhcmVhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7Ozs7QUFFQSxJQUFNLDJCQUEyQixZQUFBO1dBQU0sNkJBQU4sQUFBTSxBQUFTO0FBQWhELEFBQWdDLENBQUE7O0FBRWhDLElBQUcsc0JBQUgsQUFBeUIsZUFBUSxBQUFPLGlCQUFQLEFBQXdCLG9CQUFvQixZQUFNLEFBQUU7NEJBQUEsQUFBd0IsUUFBUSxVQUFBLEFBQUMsSUFBRDtlQUFBLEFBQVE7QUFBeEMsQUFBZ0Q7QUFBcEcsQ0FBQTs7Ozs7Ozs7O2tCQ2FsQixVQUFBLEFBQVUsVUFBVixBQUFvQixVQUFVLEFBQzVDO0tBQUksT0FBQSxBQUFPLGFBQVgsQUFBd0IsVUFBVSxBQUNqQzthQUFXLFNBQUEsQUFBUyxpQkFBcEIsQUFBVyxBQUEwQixBQUNyQztBQUVEOztLQUFNLFNBQVMsWUFBWSxTQUFaLEFBQXFCLFVBQVUsU0FMRixBQUs1QyxBQUF1RDtpQ0FMWDt5QkFBQTtzQkFBQTs7S0FNNUM7dUJBQUEsQUFBc0Isc0lBQVU7T0FBckIsQUFBcUIsZ0JBQUE7b0NBQUE7NEJBQUE7eUJBQUE7O09BQy9COzBCQUFBLEFBQW9CLHlJQUFRO1NBQWpCLEFBQWlCLGVBQzNCOzthQUFBLEFBQVEsaUJBQVIsQUFBeUIsT0FBekIsQUFBZ0MsQUFDaEM7QUFIOEI7aUJBQUE7eUJBQUE7c0JBQUE7YUFBQTtRQUFBOzJEQUFBO2lCQUFBO0FBQUE7Y0FBQTs2QkFBQTtZQUFBO0FBQUE7QUFBQTtBQUkvQjs7VUFBTyxFQUFDLFFBQVIsQUFBTyxBQUFTLEFBQ2hCO0FBWDJDO2VBQUE7c0JBQUE7bUJBQUE7V0FBQTtNQUFBO3VEQUFBO2NBQUE7QUFBQTtZQUFBOzBCQUFBO1VBQUE7QUFBQTtBQUFBO0FBWTVDO0E7O0FBN0JEOzs7Ozs7QUFNQSxJQUFNO1NBQ0csQ0FEVCxBQUFpQixBQUNSLEFBQ1A7QUFGZSxBQUNoQjs7QUFLRCxTQUFBLEFBQVMsYUFBaUI7S0FBVCxBQUFTLGNBQVQsQUFBUyxBQUN6Qjs7UUFBQSxBQUFPLE1BQVAsQUFBYSxTQUFiLEFBQXNCLEFBQ3RCO1FBQUEsQUFBTyxNQUFQLEFBQWEsU0FBVSxPQUFBLEFBQU8sZUFBOUIsQUFBNkMsQUFDN0MiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsImltcG9ydCBUZXh0YXJlYSBmcm9tICcuL2xpYnMvc3Rvcm0tdGV4dGFyZWEnO1xuXG5jb25zdCBvbkRPTUNvbnRlbnRMb2FkZWRUYXNrcyA9IFsoKSA9PiBUZXh0YXJlYSgnLmpzLXRleHRhcmVhJyldO1xuICAgIFxuaWYoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7IG9uRE9NQ29udGVudExvYWRlZFRhc2tzLmZvckVhY2goKGZuKSA9PiBmbigpKTsgfSk7IiwiLyoqXG4gKiBAbmFtZSBzdG9ybS10ZXh0YXJlYTogQXV0byByZXNpemUgdGV4dGFyZWFzIHRvIGZpdCB2YWx1ZVxuICogQHZlcnNpb24gMS4xLjA6IFN1biwgMjUgTWFyIDIwMTggMTg6Mzk6MTIgR01UXG4gKiBAYXV0aG9yIHN0b3JtaWRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5jb25zdCBkZWZhdWx0cyA9IHtcblx0ZXZlbnRzOiBbXG5cdFx0J2lucHV0J1xuXHRdXG59O1xuXG5mdW5jdGlvbiB1cGRhdGUoe3RhcmdldH0pIHtcblx0dGFyZ2V0LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcblx0dGFyZ2V0LnN0eWxlLmhlaWdodCA9ICB0YXJnZXQuc2Nyb2xsSGVpZ2h0ICsgJ3B4Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVsZW1lbnRzLCBzZXR0aW5ncykge1xuXHRpZiAodHlwZW9mIGVsZW1lbnRzID09PSAnc3RyaW5nJykge1xuXHRcdGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50cyk7XG5cdH1cblxuXHRjb25zdCBldmVudHMgPSBzZXR0aW5ncyAmJiBzZXR0aW5ncy5ldmVudHMgfHwgZGVmYXVsdHMuZXZlbnRzO1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcblx0XHRmb3IgKGNvbnN0IGV2ZW50IG9mIGV2ZW50cykge1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCB1cGRhdGUpO1xuXHRcdH1cblx0XHR1cGRhdGUoe3RhcmdldDogZWxlbWVudH0pO1xuXHR9XG59XG4iXX0=
