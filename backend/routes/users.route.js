// routes/auth.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const { body, validationResult } = require("express-validator");
const authenticate = require("../middleware/authenticate");

const router = express.Router();

router.post(
  "/sign-up/data/post",
  [
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 8 }),
    body("firstName").trim().notEmpty(),
    body("lastName").trim().notEmpty(),
  ],
  async (req, res) => {
    // 1. Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const { firstName, lastName, email, password } = req.body;

    try {
      // 2. Check if user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(409).json({
          success: false,
          message: "Email is already registered",
        });
      }

      // 3. Hash password
      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(password, salt);

      // 4. Create new user
      user = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });

      await user.save();

      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      return res.status(201).json({
        success: true,
        message: "Account created successfully",
        token,
        user: { id: user._id, email: user.email, firstName, lastName },
      });
    } catch (err) {
      console.error("Signup error:", err);
      return res.status(500).json({
        success: false,
        message: "Server error. Please try again later.",
      });
    }
  }
);

router.post(
  "/login/data/post",
  [body("email").isEmail().normalizeEmail(), body("password").exists()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Please provide valid credentials",
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    try {
      // 1. Find user
      const user = await User.findOne({ email }).select("+password"); // include password 
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      // 2. Check password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      // 3. Generate JWT token
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET || "your-secret-key-change-in-production",
        { expiresIn: "7d" }
      );

      // 4. Response
      res.json({
        success: true,
        message: "Login successful",
        token,
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      });
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  }
);


router.post("/logout", authenticate, (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;
