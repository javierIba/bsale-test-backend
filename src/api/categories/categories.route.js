var express = require('express');
var router = express.Router();
const { showAllCategories } = require('./categories.controller');

router.get('/showAllCategories', showAllCategories);

module.exports = router;

