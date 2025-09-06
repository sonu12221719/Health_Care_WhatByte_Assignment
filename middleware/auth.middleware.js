import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next)=>{
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({message: "Authorization header missing"});
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({message: "Authorization token missing"});
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        req.user={ id: decoded.id, role: decoded.role };

        next();
        
    } catch (error) {
        return res.status(403).json({message: "Unauthorized: " + error.message});
    }
}