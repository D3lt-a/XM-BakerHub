require('dotenv').config();

const express = require('express');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const salesRoutes = require('./routes/salesRoutes');


app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/sales', salesRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to XM-BakerHub API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});