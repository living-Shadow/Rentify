const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password, userType } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({ firstName, lastName, email, phoneNumber, password: hashedPassword, userType });
        await newUser.save();

        const token = jwt.sign({ userId: newUser._id, userType: newUser.userType }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
        console.log(err)
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(400).json({ message: 'User not found' });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ userId: existingUser._id, userType: existingUser.userType }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

exports.getUserDetails = async (req, res) => {
    try {
        // Extract user ID from token
        const userId = req.userId;
        
        // Fetch user details from database
        const user = await User.findById(userId);

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return user details
        res.status(200).json({ user });
    } catch (err) {
        // Handle errors
        console.error('Error fetching user details:', err);
        res.status(500).json({ message: 'Something went wrong' });
    }
};