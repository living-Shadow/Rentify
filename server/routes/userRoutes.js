const express = require('express');
const { registerUser, loginUser, getUserDetails } = require('../controllers/UserController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user', authMiddleware, getUserDetails);

module.exports = router;
