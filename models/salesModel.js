// models/salesModel.js
const db = require('../db'); // your database connection/module

// Get all orders between two dates
async function getOrdersWithinDateRange(startDate, endDate) {
    const query = `
        SELECT * FROM orders
        WHERE created_at BETWEEN ? AND ?
    `;
    const results = await db.query(query, [startDate, endDate]);
    return results;
}

// Get total sales grouped by product within date range
async function getSalesByProduct(startDate, endDate) {
    const query = `
        SELECT product_id, SUM(quantity) AS total_quantity, SUM(total_price) AS total_sales
        FROM order_items
        WHERE created_at BETWEEN ? AND ?
        GROUP BY product_id
    `;
    const results = await db.query(query, [startDate, endDate]);
    return results;
}

module.exports = {
    getOrdersWithinDateRange,
    getSalesByProduct,
};
