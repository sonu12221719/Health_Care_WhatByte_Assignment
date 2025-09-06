import jwt from 'jsonwebtoken';
import User from '../../models/User.model.js';
import bcrypt from 'bcryptjs';

export const loginUser = async (req, res)=>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        console.log(user);
        
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign(
            { id: user.id},
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
    } catch (error) {
        console.error("Error during user login:", error);
        res.status(500).json({ message: "Server error" });
    }
}