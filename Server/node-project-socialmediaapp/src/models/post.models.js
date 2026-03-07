const mongoose = require("mongoose");
const User = require("./user.models");

const postSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    content: {
      type: String,
      required: true,
      minLength: 10,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
