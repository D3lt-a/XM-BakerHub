require('dotenv').config();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findUserByEmail, createUser } = require('../models/UserModel');
const generateToken = require('../utils/generateToken');
 // <-- fixed import

exports.registerUser = async (req, res) => {
    const { email, password, name } = req.body;

    try {
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = await createUser({ email, password: hashedPassword, name });
        const token = generateToken(userId);

        res.status(201).json({ token, userId });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).j
            son({ message: 'Invalid email or password' });
        }
        const token = generateToken(user.id);
        res.status(200).json({ message: 'Login successful',token, userId: user.id });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
