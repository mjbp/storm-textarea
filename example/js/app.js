(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
 * @version 2.0.0: Sun, 27 May 2018 20:16:54 GMT
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLXRleHRhcmVhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFBLGlCQUFBLFFBQUEsdUJBQUEsQ0FBQTs7Ozs7Ozs7QUFFQSxJQUFNLDBCQUEwQixDQUFDLFlBQUE7QUFBQSxXQUFNLENBQUEsR0FBQSxnQkFBQSxPQUFBLEVBQU4sY0FBTSxDQUFOO0FBQWpDLENBQWdDLENBQWhDOztBQUVBLElBQUcsc0JBQUgsTUFBQSxFQUFpQyxPQUFBLGdCQUFBLENBQUEsa0JBQUEsRUFBNEMsWUFBTTtBQUFFLDRCQUFBLE9BQUEsQ0FBZ0MsVUFBQSxFQUFBLEVBQUE7QUFBQSxlQUFBLElBQUE7QUFBaEMsS0FBQTtBQUFwRCxDQUFBOzs7Ozs7Ozs7a0JDYWxCLFVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBOEI7QUFDNUMsS0FBSSxPQUFBLFFBQUEsS0FBSixRQUFBLEVBQWtDO0FBQ2pDLGFBQVcsU0FBQSxnQkFBQSxDQUFYLFFBQVcsQ0FBWDtBQUNBOztBQUVELEtBQU0sU0FBUyxZQUFZLFNBQVosTUFBQSxJQUErQixTQUE5QyxNQUFBO0FBTDRDLEtBQUEsNEJBQUEsSUFBQTtBQUFBLEtBQUEsb0JBQUEsS0FBQTtBQUFBLEtBQUEsaUJBQUEsU0FBQTs7QUFBQSxLQUFBO0FBTTVDLE9BQUEsSUFBQSxZQUFBLFNBQUEsT0FBQSxRQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsRUFBQSw0QkFBQSxDQUFBLFFBQUEsVUFBQSxJQUFBLEVBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSw0QkFBQSxJQUFBLEVBQWdDO0FBQUEsT0FBckIsVUFBcUIsTUFBQSxLQUFBO0FBQUEsT0FBQSw2QkFBQSxJQUFBO0FBQUEsT0FBQSxxQkFBQSxLQUFBO0FBQUEsT0FBQSxrQkFBQSxTQUFBOztBQUFBLE9BQUE7QUFDL0IsU0FBQSxJQUFBLGFBQUEsT0FBQSxPQUFBLFFBQUEsR0FBQSxFQUFBLE1BQUEsRUFBQSxFQUFBLDZCQUFBLENBQUEsU0FBQSxXQUFBLElBQUEsRUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLDZCQUFBLElBQUEsRUFBNEI7QUFBQSxTQUFqQixRQUFpQixPQUFBLEtBQUE7O0FBQzNCLGFBQUEsZ0JBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQTtBQUNBO0FBSDhCLElBQUEsQ0FBQSxPQUFBLEdBQUEsRUFBQTtBQUFBLHlCQUFBLElBQUE7QUFBQSxzQkFBQSxHQUFBO0FBQUEsSUFBQSxTQUFBO0FBQUEsUUFBQTtBQUFBLFNBQUEsQ0FBQSwwQkFBQSxJQUFBLFdBQUEsTUFBQSxFQUFBO0FBQUEsaUJBQUEsTUFBQTtBQUFBO0FBQUEsS0FBQSxTQUFBO0FBQUEsU0FBQSxrQkFBQSxFQUFBO0FBQUEsWUFBQSxlQUFBO0FBQUE7QUFBQTtBQUFBOztBQUkvQixVQUFPLEVBQUMsUUFBUixPQUFPLEVBQVA7QUFDQTtBQVgyQyxFQUFBLENBQUEsT0FBQSxHQUFBLEVBQUE7QUFBQSxzQkFBQSxJQUFBO0FBQUEsbUJBQUEsR0FBQTtBQUFBLEVBQUEsU0FBQTtBQUFBLE1BQUE7QUFBQSxPQUFBLENBQUEseUJBQUEsSUFBQSxVQUFBLE1BQUEsRUFBQTtBQUFBLGNBQUEsTUFBQTtBQUFBO0FBQUEsR0FBQSxTQUFBO0FBQUEsT0FBQSxpQkFBQSxFQUFBO0FBQUEsVUFBQSxjQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFqQjdDOzs7Ozs7QUFNQSxJQUFNLFdBQVc7QUFDaEIsU0FBUSxDQUFBLE9BQUE7QUFEUSxDQUFqQjs7QUFNQSxTQUFBLE1BQUEsQ0FBQSxJQUFBLEVBQTBCO0FBQUEsS0FBVCxTQUFTLEtBQVQsTUFBUzs7QUFDekIsUUFBQSxLQUFBLENBQUEsTUFBQSxHQUFBLE1BQUE7QUFDQSxRQUFBLEtBQUEsQ0FBQSxNQUFBLEdBQXVCLE9BQUEsWUFBQSxHQUF2QixJQUFBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9saWJzL3N0b3JtLXRleHRhcmVhJztcblxuY29uc3Qgb25ET01Db250ZW50TG9hZGVkVGFza3MgPSBbKCkgPT4gVGV4dGFyZWEoJy5qcy10ZXh0YXJlYScpXTtcbiAgICBcbmlmKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4geyBvbkRPTUNvbnRlbnRMb2FkZWRUYXNrcy5mb3JFYWNoKChmbikgPT4gZm4oKSk7IH0pOyIsIi8qKlxuICogQG5hbWUgc3Rvcm0tdGV4dGFyZWE6IEF1dG8gcmVzaXplIHRleHRhcmVhcyB0byBmaXQgdmFsdWVcbiAqIEB2ZXJzaW9uIDIuMC4wOiBTdW4sIDI3IE1heSAyMDE4IDIwOjE2OjU0IEdNVFxuICogQGF1dGhvciBzdG9ybWlkXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuY29uc3QgZGVmYXVsdHMgPSB7XG5cdGV2ZW50czogW1xuXHRcdCdpbnB1dCdcblx0XVxufTtcblxuZnVuY3Rpb24gdXBkYXRlKHt0YXJnZXR9KSB7XG5cdHRhcmdldC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG5cdHRhcmdldC5zdHlsZS5oZWlnaHQgPSAgdGFyZ2V0LnNjcm9sbEhlaWdodCArICdweCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlbGVtZW50cywgc2V0dGluZ3MpIHtcblx0aWYgKHR5cGVvZiBlbGVtZW50cyA9PT0gJ3N0cmluZycpIHtcblx0XHRlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudHMpO1xuXHR9XG5cblx0Y29uc3QgZXZlbnRzID0gc2V0dGluZ3MgJiYgc2V0dGluZ3MuZXZlbnRzIHx8IGRlZmF1bHRzLmV2ZW50cztcblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG5cdFx0Zm9yIChjb25zdCBldmVudCBvZiBldmVudHMpIHtcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgdXBkYXRlKTtcblx0XHR9XG5cdFx0dXBkYXRlKHt0YXJnZXQ6IGVsZW1lbnR9KTtcblx0fVxufVxuIl19
