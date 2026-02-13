const mongoose = require("mongoose");
const { timeStamp } = require("node:console");

const customerSchema = mongoose.Schema(
  {
    username: String,
    email: String,
    fullName: String,
    bio: String,
    profilePic: String,
  },
  {
    timeStamp: true,
  },
);

const Customer = mongoose.model("User", userSchema);

module.exports = User;
