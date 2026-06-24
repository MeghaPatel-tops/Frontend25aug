const jwt = require('jsonwebtoken');

const  authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
       

        // Check if header exists
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Token not provided"
            });
           
        }

        // Check Bearer token format
        const token = authHeader.split(" ")[1];
        
        

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Invalid token format"
            });
        }

        // Verify token
        const decoded = jwt.verify(token, "secret123");

        // Store user data in request
        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};

module.exports = authMiddleware;