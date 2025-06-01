const {
  createProduct,
  deleteProductById,
  getAllProduct,
  fetchProductById,
  updateProductById,
  fecthProductsByCategory,
} = require("../controllers/productController");
const express = require("express");
const Router = express.Router();

Router.post("/create", createProduct);
Router.delete("/delete/:id", deleteProductById);
Router.get("/get", getAllProduct);
Router.get("/get/:id", fetchProductById);
Router.put("/update/:id", updateProductById);
Router.get("/category/:category", fecthProductsByCategory);

module.exports = Router;
