import validator from "validator";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../config/token.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters long" });
    }
    let hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });

    let token = generateToken(user._id);
    res.cookie("tokenCookie", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(201).json({ message: "User Created Successfully", user });
  } catch (error) {
    console.log("Signup Error");
    return res.status(500).json({ message: `Signup Error ${error}` });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    let token = generateToken(user._id);
    res.cookie("tokenCookie", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res
      .status(201)
      .json({ message: "User Logged-in Successfully", user });
  } catch (error) {
    console.log("Login Error");
    return res.status(500).json({ message: `Login Error ${error}` });
  }
};


export const logout = async (req,res)=>{
    try {
        res.clearCookie("tokenCookie");
        return res.status(200).json({ message: "User Logged-out Successfully" });
    } catch (error) {
        res.status(500).json({ message: `Logout Error ${error}` });
    }
}