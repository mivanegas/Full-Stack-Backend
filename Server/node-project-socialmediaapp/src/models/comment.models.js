const mongoose = require("mongoose");
const User = require("./user.models");
const Post = require("./post.models");

const commentSchema = mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Post,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    content: {
      type: String,
      required: true,
      minLength: 4,
    },
  },
  {
    timestamps: true,
  },
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
