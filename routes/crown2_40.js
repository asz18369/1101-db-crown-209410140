var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_40', { title: 'Crown2_40',name: 'Chen Cheh-Hsien',id: '209410140'});
});

module.exports = router;