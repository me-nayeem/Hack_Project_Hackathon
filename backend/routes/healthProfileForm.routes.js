const express = require("express");
const HealthProfileForm = require("../model/healthProfileForm");
const User = require("../model/userSchema");
const authenticate = require("../middleware/authenticate");

const router = express.Router();



// Save/Update Profile


router.post("/", authenticate, async (req, res) => {
  try {
    const profile = await HealthProfileForm.findOneAndUpdate(
      { userId: req.userId },
      { ...req.body, userId: req.userId },
      { upsert: true, new: true }
    );

    res.json({ success: true, profile });
  } catch (err) {
    console.error("Failed to save profile:", err);
    res.status(500).json({ error: "Failed to save profile" });
  }
});

// Get Profile
router.get("/", authenticate, async (req, res) => {
  try {
    const profile = await HealthProfileForm.findOne({ userId: req.userId });
    res.json(profile);
  } catch (err) {
    console.error("Failed to get profile:", err);
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});

module.exports = router;
