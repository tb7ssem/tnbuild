const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes"); // Import auth routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // if you're sending cookies or other credentials
  })
);
app.use(bodyParser.json());

// Database connection
mongoose.connect(
  "mongodb+srv://houssemtb8:CSSKBcOJpicLCqzA@cluster0.rkmr6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {}
);

// Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes); // Use auth routes
app.post("/api/auth/login", (req, res) => {
  const { username, password } = req.body;

  // Example logic for authentication
  if (username === "admin" && password === "password") {
    // Respond with a token
    res.status(200).json({ token: "your-jwt-token" });
  } else {
    // Respond with an error message
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
