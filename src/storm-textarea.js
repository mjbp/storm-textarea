const defaults = {
	events: [
		'input'
	]
};

function update({target}) {
	target.style.height = 'auto';
	target.style.height =  target.scrollHeight + 'px';
}

function listen (event) {
	this.addEventListener(event, update);
}

export default function (elements, settings) {
	if (typeof elements === 'string') {
		elements = document.querySelectorAll(elements);
	}

	if(elements.length === 0) {
		return;
	}

	const events = settings && settings.events || defaults.events;	
	elements.forEach(element => {
		currentSettings.events.forEach(listen, element);
		update({target: element});
	});
}
