import { User } from "../models/user.schema.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/auth.utils.js";

export const signup = async (req, res, next) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    if (!email || !password || !firstName || !lastName) {
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
    const userName = `${firstName}${lastName}${Math.floor(1000 + Math.random() * 9000)}`;

    // Create user in DB...
    const userData = await User.create({
      userName,
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    return res.status(201).json({
      message: "User reginsterd sucessfully",
      data: {
        id: userData._id,
        userName: userData.userName,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
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
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Email not registered",
      });
    }
    const isPasswordmatch = await bcrypt.compare(password, user.password);
    if (!isPasswordmatch) {
      return res.status(400).json({
        message: "Password is incorrect",
      });
    } else {
      return res.status(200).json({
        message: "User Sign in sucessfully",
        token: generateToken(user),
        data: {
          id: user._id,
          userName: user.userName,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
        },
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
