const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");


const authenticate = async (req, res, next) => {
  try {
    console.log("inside authentication for form:");
    const token = req.headers.authorization?.replace("Bearer ", "");
    console.log("incoming token:", token);

    if (!token) {
      return res.status(401).json({ error: "Authentication required" });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "your-secret-key-change-in-production"
    );

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;
    req.userId = user._id;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};


module.exports = authenticate;
