const Customer = require("../models/customer.models");

const fetchCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    console.log(customers);
    res.json({
      status: "SUCCESS",
      data: customers,
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
};

const createCustomers = async (req, res) => {
  try {
    const { name, email, age, isPrime } = req.body;
    await Customer.create({ name, email, age, isPrime });

    res.json({
      status: "SUCCESS",
      message: "Customer created successfully!",
    });
  } catch (error) {
    if (error.message.includes("validation failed")) {
      return res.status(500).json({
        status: "FAILED",
        message: error.message,
      });
    }
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age, isPrime } = req.body;
    await Customer.findByIdAndUpdate(id, { name, email, age, isPrime });

    res.json({
      status: "SUCCESS",
      message: "Customer updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    await Customer.findByIdAndDelete(id);

    res.json({
      status: "SUCCESS",
      message: "Customer deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
};

module.exports = {
  fetchCustomers,
  createCustomers,
  updateCustomer,
  deleteCustomer,
};
