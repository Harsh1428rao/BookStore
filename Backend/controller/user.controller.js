import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Signup Controller
export const signup = async (req, res) => {
    try {
      console.log("Received Signup Request: ", req.body);
  
      const { fullname, email, password } = req.body;
  
      if (!fullname || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({ fullname, email, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: "Signup successful", user: newUser });
    } catch (error) {
      console.error("Signup Error:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  

// Login Controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Request body:", req.body);

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    console.log("Found user:", user);

    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });

  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};


