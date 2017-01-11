/**
 * @name storm-textarea: Auto-resize textareas to fit value size
 * @version 0.1.1: Wed, 11 Jan 2017 17:54:10 GMT
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

exports.default = { init: init };;
}));
