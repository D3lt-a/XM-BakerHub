require('dotenv').config();

const express = require('express');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

const authRoutes = require('./routes/authRoutes');

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});