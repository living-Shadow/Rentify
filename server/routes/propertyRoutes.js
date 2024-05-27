const express = require('express');
const {
    createProperty,
    getProperties,
    getProperty,
    updateProperty,
    deleteProperty,
    getSellerProperties
} = require('../controllers/PropertyController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createProperty);
router.get('/', getProperties);
router.get('/seller', auth, getSellerProperties);
router.get('/:id', getProperty);
router.put('/:id', auth, updateProperty);
router.delete('/:id', auth, deleteProperty);

module.exports = router;
