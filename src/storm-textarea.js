const defaults = {
	events: [
		'input'
	]
};

function update({target}) {
	target.style.height = 'auto';
	target.style.height =  target.scrollHeight + 'px';
}

export default function (elements, settings) {
	if (typeof elements === 'string') {
		elements = document.querySelectorAll(elements);
	}

	if(elements.length === 0) {
		return;
	}

	const events = settings && settings.events || defaults.events;
	for (let i = 0; i < elements.length; i++) {
		for (let l = 0; l < events.length; i++) {
			elements[i].addEventListener(events[l], update);
		}
		update({target: element});
	}
}
