const mongoose = require("mongoose");

const healthProfileForm = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    age: Number,
    gender: String,
    height: Number,
    weight: Number,
    bloodGroup: String,

    activityLevel: String,
    chronicDiseases: String,
    medications: String,

    heartRate: Number,
    sleepHours: Number,
    stepsGoal: Number,

    deviceType: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("HealthProfile", healthProfileForm);
