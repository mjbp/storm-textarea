import Textarea from './libs/storm-textarea';

const onDOMContentLoadedTasks = [() => Textarea('.js-textarea')];
    
if('addEventListener' in window) window.addEventListener('DOMContentLoaded', () => { onDOMContentLoadedTasks.forEach((fn) => fn()); });