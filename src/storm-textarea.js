const defaults = {
	events: [
		'input'
	]
};

function resize({target}) {
	target.style.height = 'auto';
	target.style.height =  target.scrollHeight + 'px';
}

function listen (event) {
	this.addEventListener(event, resize);
}

export default function (elements, settings) {
	if (typeof elements === 'string') {
		elements = document.querySelectorAll(elements);
	}

	if(elements.length === 0) {
		return;
	}

	const currentSettings = Object.assign({}, defaults, settings);	
	elements.forEach(element => {
		currentSettings.events.forEach(listen, element);
	});
}
