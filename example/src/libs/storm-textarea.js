/**
 * @name storm-textarea: Auto resize textareas to fit value
 * @version 1.1.0: Sun, 25 Mar 2018 18:39:12 GMT
 * @author stormid
 * @license MIT
 */
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

	const events = settings && settings.events || defaults.events;
	for (const element of elements) {
		for (const event of events) {
			element.addEventListener(event, update);
		}
		update({target: element});
	}
}
