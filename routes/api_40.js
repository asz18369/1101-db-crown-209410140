var express = require('express');
var router = express.Router();
const apiCrown2Controller_40 = require('../controllers/apiCrown2Controller_40');

/* GET home page. */
router.get('/category_40',apiCrown2Controller_40.getCategories);

module.exports = router;