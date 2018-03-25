# Storm Textarea

[![npm version](https://badge.fury.io/js/storm-textarea.svg)](https://badge.fury.io/js/storm-textarea)

Auto resize textareas to fit value

## Example
[https://mjbp.github.io/storm-textarea](https://mjbp.github.io/storm-textarea)

## Usage
JS
```
npm install storm-textarea
```

either using es6 import
```
import Textarea from 'storm-textarea';

Textarea('textarea');

```
aynchronous browser loading (use the .standalone version in the /dist folder)
```
import Load from 'storm-load';

Load('/content/js/async/storm-textarea.standalone.js')
    .then(() => {
        StormTextarea('textarea');
```

### Options
```
{
    events: [
        'input',
    ]
}
```
e.g.
```
Textarea.init('textarea', {
    events: [
        'input',
        'drop',
        'paste',
        'focus'
    ]
})
```

## Tests
```
npm run test
```

## Browser support
This is module has both es6 and es5 distributions. The es6 version should be used in a workflow that transpiles.

## Dependencies
None

## License
MIT

