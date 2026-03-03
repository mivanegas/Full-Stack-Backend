const express = require("express");
const router = express.Router();

const {
  fetchSellers,
  createSeller,
  updateSeller,
  deleteSeller,
} = require("../controllers/seller.controllers");

// READ
router.get("/sellers", fetchSellers);

// CREATE
router.post("/sellers", createSeller);

// UPDATE
router.patch("/sellers/:id", updateSeller);

// DELETE
router.delete("/sellers/:id", deleteSeller);

module.exports = router;
