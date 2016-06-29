/**
 * @name storm-textarea: Auto resize textarea to content
 * @version 0.1.0: Wed, 29 Jun 2016 13:15:32 GMT
 * @author stormid
 * @license MIT
 */(function(root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Textarea = factory();
  }
}(this, function() {
	'use strict';
    
    var instances = [],
        defaults = {
            paddingBottom: 20,
            events: [
                'focus',
                'cut',
                'paste',
                'drop',
                'keydown'
            ]
        },
        StormTextarea = {
            init: function() {
                this.DOMElement.addEventListener('change', this.resize.bind(this));
                this.settings.events.forEach(function(evt){
                    this.DOMElement.addEventListener(evt, this.resize.bind(this));
                }.bind(this));
            },
            resize: function() {
                
                this.DOMElement.style.height = 'auto';
                this.DOMElement.style.height =  this.DOMElement.scrollHeight + this.settings.paddingBottom + 'px';
            },
            throttleResize: function() {
                window.setTimeout(this.resize.bind(this), 20);
            }
        };
    
    function init(sel, opts) {
        var els = [].slice.call(document.querySelectorAll(sel));
        
        if(els.length === 0) {
            throw new Error('Textarea cannot be initialised, no augmentable elements found');
        }
        
        els.forEach(function(el, i){
            instances[i] = Object.assign(Object.create(StormTextarea), {
                DOMElement: el,
                settings: Object.assign({}, defaults, opts)
            });
            //add further objects as assign arguments for object composition
            instances[i].init();
        });
        return instances;
    }
    
    function reload(els, opts) {
        destroy();
        init(els, opts);
    }
    
    function destroy() {
        this.DOMElement.removeEventListener('change', this.resize);
        this.settings.forEach(function(evt){
            this.DOMElement.aremoveEventListener(evt, this.resize);
        }.bind(this));
        instances = [];
    }
    
	return {
		init: init,
        reload: reload,
        destroy: destroy
	};
	
 }));