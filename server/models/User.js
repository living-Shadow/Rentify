const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    userType: { type: String, required: true, enum: ['seller', 'buyer'] }
});

module.exports = mongoose.model('User', userSchema);
