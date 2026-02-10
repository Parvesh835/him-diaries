import { User } from "../models/user.schema.js";
import bcrypt from "bcrypt";


export const signup = async (req, res, next) => {
    try {
        const { userName, email, password } = req.body;
        if (!userName || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        const isUserExit = await User.findOne({ email });
        if (isUserExit) {
            return res.status(400).json({
                message: "email already exit",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user in DB...
        const userData = await User.create({
            userName,
            email,
            password: hashedPassword,
        });

        return res.status(201).json({
            message: "User reginsterd sucessfully",
            data: {
                id: userData._id,
                name: userData.userName,
            },
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

export const signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }
        const registeredUser = await User.findOne({ email });
        if (!registeredUser) {
            return res.status(400).json({
                message: "Email not registered",
            });
        }
        const isPasswordmatch = await bcrypt.compare(password, registeredUser.password);
        if (!isPasswordmatch) {
            return res.status(400).json({
                message: "Password is incorrect",
            })
        } else {
            return res.status(200).json({
                message: "User Sign in sucessfully",
                data: {
                    name: registeredUser.userName,
                    id: registeredUser._id,
                }
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
} 
