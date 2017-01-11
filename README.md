#Storm Textarea

[![Build Status](https://travis-ci.org/mjbp/storm-textarea.svg?branch=master)](https://travis-ci.org/mjbp/storm-textarea)
[![codecov.io](http://codecov.io/github/mjbp/storm-textarea/coverage.svg?branch=master)](http://codecov.io/github/mjbp/storm-textarea?branch=master)
[![npm version](https://badge.fury.io/js/storm-textarea.svg)](https://badge.fury.io/js/storm-textarea)

Auto resize textareas to fit value

##Example
[https://mjbp.github.io/storm-textarea](https://mjbp.github.io/storm-textarea)

##Usage
JS
```
npm install storm-textarea
```

either using es6 import
```
import Textarea from 'storm-texarea';

Textarea.init('textarea');

```
aynchronous browser loading (use the .standalone version in the /dist folder)
```
import Load from 'storm-load';

Load('/content/js/async/storm-texarea.standalone.js')
    .then(() => {
        StormTextarea.init('textarea');
```

###Options
```
{
    paddingBottom: 16 //px added to bottom of textarea above the scrollHeight of the textContent
    events: [
        'focus',
        'cut',
        'paste',
        'drop',
        'keydown',
        'change'
    ]
}
```
e.g.
```
Textarea.init('textarea', {
    paddingBottom: 5
})
```

##Tests
```
npm run test
```

##Browser support
This is module has both es6 and es5 distributions. The es6 version should be used in a workflow that transpiles.

The es5 version depends unpon Object.assign, element.classList, and Promises so all evergreen browsers are supported out of the box, ie9+ is supported with polyfills. ie8+ will work with even more polyfils for Array functions and eventListeners.

##Dependencies
None

##License
MIT

