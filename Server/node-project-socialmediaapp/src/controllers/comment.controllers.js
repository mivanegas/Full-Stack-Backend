const Comment = require("../models/comment.models");
const Post = require("../models/post.models");
const User = require("../models/user.models");

const fetchComments = async (req, res) => {
  try {
    const { post } = req.query;
    const postComment = await Comment.find({ post })
      .populate("author", "username fullName")
      .populate("post", "content");

    res.json({
      status: "SUCCESS",
      data: postComment,
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
};

const createComment = async (req, res) => {
  try {
    const currentUserId = req._id;
    const { post, content } = req.body;

    // Ensures only a correct user is added
    const user = await User.findById(currentUserId);
    if (!user) {
      return res.status(400).json({
        status: "FAILED",
        message: "Author not found",
      });
    }
    // Checks if a posts exists
    const postToComment = await Post.findById(post);
    if (!postToComment) {
      return res.status(400).json({
        status: "FAILED",
        message: "Post not found",
      });
    }

    await Comment.create({
      post,
      author: currentUserId,
      content,
    });

    res.json({
      status: "SUCCESS",
      message: "Comment was created successfully!",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error,
    });
  }
};

const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    await Comment.findByIdAndUpdate(id, { content });

    res.json({
      status: "SUCCESS",
      message: "Comment updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error,
    });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndDelete(id);

    res.json({
      status: "SUCCESS",
      message: "Comment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error,
    });
  }
};

module.exports = {
  fetchComments,
  createComment,
  updateComment,
  deleteComment,
};
