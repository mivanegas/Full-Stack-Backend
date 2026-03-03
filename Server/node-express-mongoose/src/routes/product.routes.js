const express = require("express");
const router = express.Router();

const {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controllers");

// READ
router.get("/products", fetchProducts);

// CREATE
router.post("/products", createProduct);

// UPDATE
router.patch("/products/:id", updateProduct);

// DELETE
router.delete("/products/:id", deleteProduct);

module.exports = router;
