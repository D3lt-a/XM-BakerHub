// routes/salesRoutes.js
const express = require('express');
const router = express.Router();

const { getTotalSales, getProductSalesReport } = require('../controllers/salesController');

// GET /sales/total?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD
router.get('/total', getTotalSales);

// GET /sales/products?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD
router.get('/products', getProductSalesReport);

module.exports = router;
