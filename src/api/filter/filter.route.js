var express = require('express');
var router = express.Router();
const {
    showAllProducts,
    showProductByCategory,
    searchProductBy,
    
} = require('./filter.controller');

router.get('/showAll',showAllProducts);
router.post('/showProductByCategory',showProductByCategory);
router.post('/searchProductBy',searchProductBy);

module.exports = router;
