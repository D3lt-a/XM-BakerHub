// controllers/salesController.js
const { getOrdersWithinDateRange, getSalesByProduct } = require('../models/salesModel');

const getTotalSales = async (req, res) => {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
        return res.status(400).json({ message: 'startDate and endDate query params are required' });
    }

    try {
        const orders = await getOrdersWithinDateRange(startDate, endDate);
        const totalSales = orders.reduce((sum, order) => sum + order.total_amount, 0);

        res.status(200).json({ totalSales });
    } catch (error) {
        console.error('Error fetching total sales:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getProductSalesReport = async (req, res) => {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
        return res.status(400).json({ message: 'startDate and endDate query params are required' });
    }

    try {
        const salesByProduct = await getSalesByProduct(startDate, endDate);
        res.status(200).json(salesByProduct);
    } catch (error) {
        console.error('Error fetching product sales report:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getTotalSales,
    getProductSalesReport,
};
