const express = require('express');
const router = express.Router();
const { validateFilters, getProducts } = require('../controllers/productController');

// GET /api/products — filtered, sorted product listing
router.get('/products', validateFilters, getProducts);

module.exports = router;
