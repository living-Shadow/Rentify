const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    place: { type: String, required: true },
    area: { type: String, required: true }, 
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    propertyType: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    amenities: { type: [String], required: true },
    photos: { type: [String], required: true },
    contactInfo: { type: String, required: true }
});

module.exports = mongoose.model('Property', propertySchema);
