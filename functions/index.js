require('dotenv').config();

const express = require('express');
const db = require('./functions/config/db');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

const authRoutes = require('./functions/routes/authRoutes');
const productRoutes = require('./functions/routes/productRoutes');
const orderRoutes = require('./functions/routes/orderRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to XM-BakerHub API');
});

exports.api = functions.https.onRequest(app);