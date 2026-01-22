require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const User = require("./model/userSchema");

const DatabaseUrl = process.env.DATABASE_URL;

const app = express();

app.use(cors());
app.use(express.json());


// Routes imports
const UserRegisterRoute = require("./routes/users.route");
const AIChatRoute = require("./routes/ai.routes");
const DashboardRoute = require("./routes/dashboard.route");
const CheckisValid = require("./routes/isvaliduser.route");
const HealthProfileForm = require("./routes/healthProfileForm.routes");

// Routes

app.use("/api/ai-chat", AIChatRoute);
app.use("/api/user", UserRegisterRoute);
app.use("/api/dashboard", DashboardRoute);
app.use("/api/auth", CheckisValid);
app.use("/api/health-profile-form", HealthProfileForm);

mongoose
  .connect(DatabaseUrl)
  .then(() => {
    console.log("mongo connected...");
    app.listen(3001, () => {
      console.log("server is runing on http://localhost:3001");
    });
  })
  .catch((err) => {
    console.log("error while connecting database: ", err);
  });
