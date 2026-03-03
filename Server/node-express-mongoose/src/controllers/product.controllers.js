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
    const { title, price, category, sellerId } = req.body;
    await Customer.create({ title, price, category, sellerId });

    res.json({
      status: "SUCCESS",
      message: "Product created successfully!",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, price, category, sellerId } = req.body;
    await Product.findByIdAndUpdate(id, { title, price, category, sellerId });

    res.json({
      status: "SUCCESS",
      message: "Product updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);

    res.json({
      status: "SUCCESS",
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
};

module.exports = {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
