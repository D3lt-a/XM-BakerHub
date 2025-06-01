const {
  placeOrder,
  getUserOrders,
  getOrder,
  updateOrder,
} = require("../controllers/orderController");
const express = require("express");
const Router = express.Router();

Router.post("/orders", placeOrder);
Router.get("/orders/:userId", getUserOrders);
Router.get("/orders/:orderId", getOrder);
Router.put("/orders/:orderId", updateOrder);

module.exports = Router;
