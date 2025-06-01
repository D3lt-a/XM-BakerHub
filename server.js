require('dotenv').config();

const express = require('express');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to XM-BakerHub API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});