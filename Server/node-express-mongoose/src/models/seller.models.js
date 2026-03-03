const mongoose = require("mongoose");

const sellerSchema = mongoose.Schema({
  name: String,
  email: String,
});

const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;
