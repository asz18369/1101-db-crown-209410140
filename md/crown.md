# First one

##Q1.
```html
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',name: 'Chen Cheh-Hsien',id: '209410140'});
});

module.exports = router;
```
![](https://i.imgur.com/5boq1MC.png)

##Q2
```js
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
    <p>
      My name is <%= name %>
    </p>
    <h3>
      My id is <%= id %>
    </h3>
  </body>
</html>
```
![](https://i.imgur.com/ftPhvrz.jpg)
---

## Q3
![](https://i.imgur.com/A5TPSYQ.png)

## Q4
![](https://i.imgur.com/V18eI82.png)

## Q5
![](https://i.imgur.com/dudvKcd.png)