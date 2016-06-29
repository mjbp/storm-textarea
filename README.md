#Storm Textarea

Auto resizes textareas to fit value content

##API
```
npm i -S storm-textarea
```
```
var TextArea = require('storm-textarea');
TextArea.init('.js-texarea');
```

###Options
```
{
    paddingBottom: 20 //px added to bottom of textarea above the scrollHeight of the textContent
    events: [
        'focus',
        'cut',
        'paste',
        'drop',
        'keydown'
    ]
}
```