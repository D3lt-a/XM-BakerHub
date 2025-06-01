require("dotenv").config();

const express = require("express");
const functions = require("firebase-functions");

const app = express();

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to XM-BakerHub API");
});

exports.api = functions.https.onRequest(app);
