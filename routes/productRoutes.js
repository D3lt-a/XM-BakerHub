const {
    createProduct,
    deleteProductById,
    getAllProduct,
    fetchProductById,
    updateProductById,
    fecthProductsByCategory
} = require('../controllers/productController');
const express = require('express');
const router = express.Router();

router.post('/create', createProduct);
router.delete('/delete/:id', deleteProductById);
router.get('/get', getAllProduct);
router.get('/get/:id', fetchProductById);
router.put('/update/:id', updateProductById);
router.get('/category/:category', fecthProductsByCategory);

module.exports = router;