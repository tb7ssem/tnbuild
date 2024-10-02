const express = require("express");
const Product = require("../models/Product");
const auth = require("../middleware/auth"); // Import auth middleware

const router = express.Router();

// Get all products
router.get("/", auth, async (req, res) => {
  // Protect this route
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new product
router.post("/", auth, async (req, res) => {
  // Protect this route
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ... additional routes can be added here

module.exports = router;
