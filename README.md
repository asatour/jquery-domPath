# jquery.domPath [![Build Status](https://travis-ci.org/asatour/jquery-domPath.svg)](https://travis-ci.org/asatour/jquery-domPath) [![Code Climate](https://codeclimate.com/github/asatour/jquery-domPath/badges/gpa.svg)](https://codeclimate.com/github/asatour/jquery-domPath) [![Coverage Status](https://coveralls.io/repos/asatour/jquery-domPath/badge.svg)](https://coveralls.io/r/asatour/jquery-domPath)

[![Join the chat at https://gitter.im/asatour/jquery-domPath](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/asatour/jquery-domPath?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A simple jQuery plugin for getting DOM Path of HTML elements (http://asatour.github.io/jquery-domPath/).


## Installation

Include script *after* the jQuery library : 

```html
<script src="/path/jquery.domPath.js"></script>
```

## Usage

### Basic configuration

HTML:

*Note: The HTML code below, will be used in all usage examples in this documentation.*
```html
<body>
<div class="module" id="products-block">
    <div class="description">
        <h1 class="section-title">
            product general description
        </h1>
        <ul class="products">
            <li>Cameras</li>
            <li>TV</li>
            <li>Computers</li>
        </ul>
    </div>
</div>
</body>
```


JavaScript:

```js
var products_domPath = $(".products").domPath();
```
Output:

The value of products_domPath is:

```js
["div#products-block.module > div.description > ul.products"]
```

### With additional settings

JavaScript:

Don't get elements class.
```js
var products_domPath = $(".products").domPath({class: false});
```
Output:

The value of products_domPath is:

```js
["div#products-block > div > ul"]
```

## jquery.domPath Options

### Options with default values

```js
var options = {
  tag             :   true,   // get dom tag
  lowerCase       :   true,   // get tag in lower or upper case
  class           :   true,   // get element class
  id              :   true,   // get element id
  body            :   false,  // show body in dom full path
  idBeforeClass   :   true,   // display id before class
  oneResult       :   false,  // get only the first result(as string)
  scaleType       :   false   // if the result contains only one element get it as string and not array
};
var products_domPath = $(".products").domPath(options);
```

### Example of options
Below all examples of the possible configuration.

#### tag
If true display the tag name in the DOM Path

JavaScript:
```js
var products_domPath = $(".products").domPath({tag: false});
```

Output:
```js
["#products-block.module > .description > .products"]
```

#### lowerCase
Display the tag name in lowercase

JavaScript:
```js
var products_domPath = $(".products").domPath({lowerCase: false});
```

Output:
```js
["DIV#products-block.module > DIV.description > UL.products"]
```

#### class
Display the class attribute (if it exists) in the DOM Path

JavaScript:
```js
var products_domPath = $(".products").domPath({lowerCase: false});
```

Output:
```js
["div#products-block > div > ul"]
```

#### id
Display the ID attribute (if it exists) in the DOM Path

JavaScript:
```js
var products_domPath = $(".products").domPath({id: false});
```

Output:
```js
["div.module > div.description > ul.products"]
```

#### body
Show the body tag in the DOM Path (default is to not show it)

JavaScript:
```js
var products_domPath = $(".products").domPath({body: true});
```

Output:
```js
["body > div#products-block.module > div.description > ul.products"]
```

#### idBeforeClass
Display id before class (default)
*Note: If id or class doesn't exist, this setting will have no effect*

JavaScript:
```js
var products_domPath = $(".products").domPath({idBeforeClass: false});
```

Output:
```js
["div.module#products-block > div.description > ul.products"]
```

#### oneResult
Get only the first Result as String inspite of Array

JavaScript:
```js
var products_domPath = $("li").domPath({oneResult: true});
```

Output:
```js
"div#products-block.module > div.description > ul.products > li"
```

#### scaleType
In case of one result, inspite of returning an Array with one element, get the result as String

JavaScript:
```js
var products_domPath = $(".products").domPath({scaleType: true});
```

Output:
```js
"div#products-block.module > div.description > ul.products"
```

## Authors

[Abdelahad SATOUR](https://github.com/asatour)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/asatour/jquery-dompath/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

