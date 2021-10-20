var express = require('express');
var router = express.Router();
const crown2Controller_40 = require('../controllers/crown2Controller_40');

/* GET home page. */
router.get('/',crown2Controller_40.getCategories);

module.exports = router;