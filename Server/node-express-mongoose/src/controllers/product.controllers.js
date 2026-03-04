const Product = require("../models/product.models");

const fetchProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("seller", "name");
    res.json({
      status: "SUCCESS",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { title, price, category, seller } = req.body;

    await Product.create({ title, price, category, seller });

    res.json({
      status: "SUCCESS",
      message: "Product created successfully!",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, price, category, seller } = req.body;
    await Product.findByIdAndUpdate(id, { title, price, category, seller });
    res.json({
      status: "SUCCESS",
      message: "Product updated successfully!",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({
      status: "SUCCESS",
      message: "Product deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error,
    });
  }
};

module.exports = {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
