const { addProduct, getProduct, 
    getProductById, updateProduct, 
    deleteProduct, getProductsByCategory 
} = require('../services/productService');

exports.createProduct = async (req, res) => {
    const productData = req.body;

    try {
        const productId = await addProduct(productData);
        res.status(201).json({ message: 'Product created successfully', productId });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const deleteProductById = async (req, res) => {
    const productId = req.params.id;

    try {
        const result = await deleteProduct(productId);
        if (result) {
            res.status(200).json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const getProduct = async (req, res) => {
    try {
        const products = await getProduct();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const getProductById = async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await getProductById(productId);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const updateProductById = async (req, res) => {
    const productId = req.params.id;
    const productData = req.body;

    try {
        const result = await updateProduct(productId, productData);
        if (result) {
            res.status(200).json({ message: 'Product updated successfully' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const getProductsByCategory = async (req, res) => {
    const category = req.params.category;

    try {
        const products = await getProductsByCategory(category);
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products by category:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {
    createProduct,
    deleteProductById,
    getProduct,
    getProductById,
    updateProductById,
    getProductsByCategory
};