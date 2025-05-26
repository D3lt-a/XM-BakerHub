const {
    createProduct,
    deleteProductById,
    getProduct,
    getProductById,
    updateProductById,
    getProductsByCategory
} = require('../controllers/productController');
const express = require('express');
const router = express.Router();

router.post('/create', createProduct);
router.delete('/delete/:id', deleteProductById);
router.get('/get', getProduct);
router.get('/get/:id', getProductById);
router.put('/update/:id', updateProductById);
router.get('/category/:category', getProductsByCategory);

module.exports = router;