import should from 'should';
import Textarea from '../dist/storm-textarea';
import 'jsdom-global/register';

const html = `<textarea class="js-ta--1" style="height:20px"></textarea>
			<textarea class="js-ta--2"></textarea>`;

document.body.innerHTML = html;


let textareaItems = Textarea.init('.js-ta--1'),
	textareaItems2 = Textarea.init('.js-ta--2', {
		paddingBottom: 0
	});

describe('Initialisation', () => {

	it('should return array of texareas', () => {
		should(textareaItems)
		.Array()
		.and.have.lengthOf(1);
	});
	
	it('should throw an error if no textareas are found', () => {
		Textarea.init.bind(Textarea, '.js-err').should.throw();
	});
	
	
	it('each array item should be an object with the correct properties', () => {
		textareaItems[0].should.be.an.instanceOf(Object).and.not.empty();
		textareaItems[0].should.have.property('DOMElement');
		textareaItems[0].should.have.property('settings').Object();
		textareaItems[0].should.have.property('init').Function();
		textareaItems[0].should.have.property('resize').Function();
    
	});

	it('should initialisation with different settings if different options are passed', () => {
		should(textareaItems2[0].settings.paddingBottom).not.equal(textareaItems[0].settings.paddingBottom);
	});
	
	it('should attach the handleClick eventListener to each tab title click event to toggle documentElement className', () => {
		let initialHeight = textareaItems[0].DOMElement.style.height;
		//console.log(initialHeight);
		textareaItems[0].DOMElement.focus();
		//console.log(textareaItems[0].DOMElement.style.height);
	});

});