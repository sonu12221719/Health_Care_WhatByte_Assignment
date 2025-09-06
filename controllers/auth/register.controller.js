import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/User.model.js";
import Doctor from "../../models/Doctor.model.js";
import Patient from "../../models/Patient.model.js";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ name, email, password: hashedPassword });

        res.status(201).json({
            message: "User registered successfully",
            user
        });
    } catch (error) {
        console.error("Error during user registration:", error);
        res.status(500).json({ message: "Server error" });
    }
};
