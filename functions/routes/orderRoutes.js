const {
    placeOrder,
    getUserOrders,
    getOrder,
    updateOrder
} = require('../controllers/orderController');
const express = require('express');
const router = express.Router();

router.post('/orders', placeOrder);
router.get('/orders/:userId', getUserOrders);
router.get('/orders/:orderId', getOrder);
router.put('/orders/:orderId', updateOrder);

module.exports = router;