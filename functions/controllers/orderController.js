const {
    createOrder,
    getOrdersByUser,
    getOrderById,
    updateOrderStatus
} = require('../models/orderModel');
const { getUserById } = require('../models/userModel');

const placeOrder = async (req, res) => {
    const { userId, items } = req.body;

    try {
        const user = await getUserById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const orderId = await createOrder(userId, items);
        res.status(201).json({ orderId });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getUserOrders = async (req, res) => {
    const { userId } = req.params;

    try {
        const orders = await getOrdersByUser(userId);
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getOrder = async (req, res) => {
    const { orderId } = req.params;

    try {
        const order = await getOrderById(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const updateOrder = async (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;

    try {
        const updated = await updateOrderStatus(orderId, status);
        if (!updated) {
            return res.status(404).json({ message: 'Order not found or update failed' });
        }
        res.status(200).json({ message: 'Order updated successfully' });
    } catch (error) {
        console.error('Error updating order:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    placeOrder,
    getUserOrders,
    getOrder,
    updateOrder
};
