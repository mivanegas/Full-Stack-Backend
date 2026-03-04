const Seller = require("../models/seller.models");

const fetchSellers = async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.json({
      status: "SUCCESS",
      data: sellers,
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
};

const createSeller = async (req, res) => {
  try {
    const { name, email } = req.body;

    await Seller.create({ name, email });

    res.json({
      status: "SUCCESS",
      message: "Seller created successfully!",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error,
    });
  }
};

const updateSeller = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    await Seller.findByIdAndUpdate(id, { name, email });
    res.json({
      status: "SUCCESS",
      message: "Seller updated successfully!",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error,
    });
  }
};

const deleteSeller = async (req, res) => {
  try {
    const { id } = req.params;
    await Seller.findByIdAndDelete(id);
    res.json({
      status: "SUCCESS",
      message: "Seller deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error,
    });
  }
};

module.exports = {
  fetchSellers,
  createSeller,
  updateSeller,
  deleteSeller,
};
