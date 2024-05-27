const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports =  (req, res, next) => {
    // Get token from request headers
    const token = req.headers.authorization;

    // Check if token is provided
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        // Verify and decode token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
       // console.log(decodedToken)

        // Extract user ID from decoded token and set it in the request object
        req.userId = decodedToken.userId;

        // Proceed to next middleware
        next();
    } catch (error) {
        // Handle token verification errors
        console.error('Error verifying token:', error);
        return res.status(401).json({ message: 'Invalid token' });
    }
};


