var express = require('express');
var router = express.Router();
const {showAllProducts} = require('./filter.controller');
router.get('/showAll',showAllProducts);

module.exports = router;
