const mongoose = require("mongoose");
const Seller = require("./seller.models");

const productSchema = mongoose.Schema({
  title: String,
  price: Number,
  category: String,
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Seller,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
