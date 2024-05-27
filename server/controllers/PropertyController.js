const { json } = require('body-parser');
const Property = require('../models/Property');

exports.createProperty = async (req, res) => {
    const { place, area, bedrooms, bathrooms, propertyType, price, description, amenities, photos, contactInfo } = req.body;
    const sellerId = req.userId;

    try {
        const newProperty = new Property({ sellerId, place, area, bedrooms, bathrooms, propertyType, price, description, amenities, photos, contactInfo });
        await newProperty.save();

        res.status(201).json(newProperty);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.getProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

exports.getProperty = async (req, res) => {
    const { id } = req.params;

    try {
        const property = await Property.findById(id);
        if (!property) return res.status(404).json({ message: 'Property not found' });

        res.status(200).json(property);
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

exports.updateProperty = async (req, res) => {
    const { id } = req.params;
    const { place, area, bedrooms, bathrooms, propertyType, price, description, amenities, photos, contactInfo } = req.body;

    try {
        const property = await Property.findById(id);
        if (!property) return res.status(404).json({ message: 'Property not found' });

        property.place = place;
        property.area = area;
        property.bedrooms = bedrooms;
        property.bathrooms = bathrooms;
        property.propertyType = propertyType;
        property.price = price;
        property.description = description;
        property.amenities = amenities;
        property.photos = photos;
        property.contactInfo = contactInfo;

        await property.save();

        res.status(200).json(property);
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
        console.log(err)
    }
};

exports.deleteProperty = async (req, res) => {
    const { id } = req.params;

    try {
        const property = await Property.findById(id);
        if (!property) return res.status(404).json({ message: 'Property not found' });

        await property.deleteOne();

        res.status(200).json({ message: 'Property deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

exports.getSellerProperties = async (req, res) => {
    const sellerId = req.userId;

    try {
        const properties = await Property.find({ sellerId });
        res.status(200).json(properties);
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
