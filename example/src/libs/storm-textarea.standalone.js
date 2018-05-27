/**
 * @name storm-textarea: Auto resize textareas to fit value
 * @version 1.1.0: Sun, 27 May 2018 19:35:39 GMT
 * @author stormid
 * @license MIT
 */
(function(root, factory) {
   var mod = {
       exports: {}
   };
   if (typeof exports !== 'undefined'){
       mod.exports = exports
       factory(mod.exports)
       module.exports = mod.exports.default
   } else {
       factory(mod.exports);
       root.StormTextarea = mod.exports.default
   }

}(this, function(exports) {
   'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
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

exports.default = { init: init };;
}));
