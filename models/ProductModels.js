const db = require('../config/db');

const addProduct = async (productData) => {
    try {
        const query = `
            INSERT INTO products (name, category, price, quantity)
            VALUES (?, ?, ?, ?)
        `;
    const [result] = await db.execute(query, [
        productData.name,
        productData.category,
        productData.price,
        productData.quantity
    ]);
    return result.insertId;
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
}

const getProduct = async () => {
    try {
        let query = 'SELECT * FROM products';

        const [rows] = await db.execute(query);
        return rows;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

const getProductById = async (productId) => {
    try {
        const query = `
            SELECT * FROM products WHERE id = ?
        `;
        const [rows] = await db.execute(query, [productId]);
        return rows[0] || null;
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
};

const updateProduct = async (productId, productData) => {
    try {
        const query = `
            UPDATE products
            SET name = ?, category = ?, price = ?, quantity = ?
            WHERE id = ?
        `;
        const [result] = await db.execute(query, [
            productData.name,
            productData.category,
            productData.price,
            productData.quantity,
            productId
        ]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
}

const deleteProduct = async (productId) => {
    try {
        const query = `
            DELETE FROM products WHERE id = ?
        `;
        const [result] = await db.execute(query, [productId]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
}

const getProductsByCategory = async (category) => {
    try {
        const query = `
            SELECT * FROM products WHERE category = ?
        `;
        const [rows] = await db.execute(query, [category]);
        return rows;
    } catch (error) {
        console.error('Error fetching products by category:', error);
        throw error;
    }
}

module.exports = { addProduct, getProduct, 
    getProductById, updateProduct, 
    deleteProduct, getProductsByCategory };   