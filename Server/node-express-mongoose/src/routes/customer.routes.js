const express = require("express");
const router = express.Router();

const {
  fetchCustomers,
  createCustomers,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customer.controllers");

// READ
router.get("/customers", fetchCustomers);

// CREATE
router.post("/customers", createCustomers);

// UPDATE
router.patch("/customers/:id", updateCustomer);

// DELETE
router.delete("/customers/:id", deleteCustomer);

module.exports = router;
