// routes/auth.js
const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const authenticate = require("../middleware/authenticate");
const HealthProfileForm = require("../model/healthProfileForm");


const router = express.Router();


router.get("/data/get", authenticate, async (req, res) => {
  try {
    res.json({
      success: true,
      user: {
        id: req.user._id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        avatar: req.user.avatar || null,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// GET /api/health/form-data
router.get("/form", authenticate, async (req, res) => {
  console.log("Inside form data route - userId:", req.userId);

  try {
    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized: userId missing" });
    }

    const profile = await HealthProfileForm.findOne({ userId: req.userId }).lean();

    if (!profile) {
      return res.status(404).json({ message: "Health profile not found" });
    }

    return res.status(200).json(profile);
  } catch (err) {
    console.error("Error fetching health profile:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
});


module.exports = router;