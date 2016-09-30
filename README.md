# easyScale
Add responsive support for fixed width elements. [View example](http://ewind.us/platform/doc/easy-scale.html)


## Install
``` html
<script src="js/easyScale.min.js"></script>
```


## Usage

### HTML
``` html
<div id="foo"></div>
<div class="bar"></div>
<div id="baz"></div>
```

### CSS
``` css
#foo, .bar, #baz {
    margin: 10px auto 10px auto;
    height: 200px;
    width: 800px;
    background-color: #56CBF9;
}
```

### JS
``` js
$.fn.easyScale([
    { el: "#foo", minBound: [0, 0], maxBound: [1300, 500] },
    { el: ".bar", minBound: [0, 0], maxBound: [1000, 500] },
    { el: "#baz", minBound: [600, 400], maxBound: [1000, 500] }
]);
```


## Options
* `el`: required, jQuery selector `string`
* `minBound`: required, `[numberX, numberY]` thereshold to stop zooming
* `maxBound`: required, `[numberX, numberY]` thereshold to start zooming


## License
MIT
