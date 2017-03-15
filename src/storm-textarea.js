
const defaults = {
		paddingBottom: 16,
		events: [
			'focus',
			'cut',
			'drop',
			'keydown',
			'resize',
			'change'
		]
	},
	StormTextarea = {
		init() { 
			this.settings.events.forEach(evt => this.DOMElement.addEventListener(evt, this.resize.bind(this)));
			return this;
		},
		resize() {
			this.DOMElement.style.height = 'auto';
			this.DOMElement.style.height =  this.DOMElement.scrollHeight + this.settings.paddingBottom + 'px';
		}
	};
	
const init = (sel, opts) => {
	let els = [].slice.call(document.querySelectorAll(sel));
	
	if(els.length === 0) throw new Error('Textarea cannot be initialised, no augmentable elements found');
	
	return els.map(el => {
		return Object.assign(Object.create(StormTextarea), {
			DOMElement: el,
			settings: Object.assign({}, defaults, opts)
		}).init();
	});
};

export default { init };