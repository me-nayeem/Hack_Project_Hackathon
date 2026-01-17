// routes/auth.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const { body, validationResult } = require("express-validator");
const authenticate = require("../middleware/authenticate");

const router = express.Router();


router.get('/verify', authenticate, async (req, res) => {
  try {
    console.log("User verified:", req.user._id);

    res.json({
      ok: true,
      user: req.user,
    });
  } catch (error) {
    console.error('Verify error:', error);
    res.status(500).json({ message: 'Server error during verification' });
  }
});

module.exports = router;