# 資料庫 HW1 作業說明 -- 10/20 上課結束後完成繳交


## P0.
覺得進度還是略快，但整體還勉強可以跟上，然期中作業有點難度，因為一年級進度太快很多東西都忘了，需要一點時間回憶跟研究。

## P1.
```html
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',name: 'Chen Cheh-Hsien',id: '209410140'});
});

module.exports = router;
```
```
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

![](https://i.imgur.com/33de0cY.png)

## P2
[Chrome URL](http://localhost:3000/crown_40)
![](https://i.imgur.com/5cE54TD.jpg)
![](https://i.imgur.com/MLMjoU1.png)
![](https://i.imgur.com/9LCXP1R.png)
---

## P3
![](https://i.imgur.com/NAlszlx.png)



## P4
![](https://i.imgur.com/op85pBH.jpg)

##[Github](https://github.com/asz18369/1101-db-crown-209410140)

![](https://i.imgur.com/aS0bykJ.png)


## P5

## P6

## P7