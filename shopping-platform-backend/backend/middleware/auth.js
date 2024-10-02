const jwt = require("jsonwebtoken");
const JWT_SECRET = "your_jwt_secret"; // Use the same secret as in authRoutes

const auth = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Get token from Authorization header
  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified; // Attach user info to request
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = auth;
