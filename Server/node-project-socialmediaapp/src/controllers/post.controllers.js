const Post = require("../models/post.models");
const User = require("../models/user.models");

const fetchPosts = async (req, res) => {
  try {
    const { author } = req.query;

    let posts;
    if (author) {
      posts = await Post.find({ author })
        .populate("author", "username fullName")
        .populate("likes", "username fullName");
    } else {
      posts = await Post.find()
        .populate("author", "username fullName")
        .populate("likes", "username fullName");
    }

    res.json({
      status: "SUCCESS",
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
};

const createPost = async (req, res) => {
  try {
    const currentUserId = req._id;
    const { content } = req.body;

    // Ensures only a correct user is added
    const user = await User.findById(currentUserId);
    if (!user) {
      return res.status(400).json({
        status: "FAILED",
        message: "Author not found",
      });
    }

    await Post.create({
      author: currentUserId,
      content,
    });

    res.json({
      status: "SUCCESS",
      message: "Post was created successfully!",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error,
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    await Post.findByIdAndUpdate(id, { content });

    res.json({
      status: "SUCCESS",
      message: "Post updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);

    res.json({
      status: "SUCCESS",
      message: "Post deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error,
    });
  }
};

const togglePostLike = async (req, res) => {
  try {
    const { id } = req.params;
    const currentUserId = req.body;

    const post = await Post.findById(id);
    if (!post) {
      return res.status(400).json({
        status: "FAILED",
        message: "Post not found",
      });
    }

    const alreadyLiked = post.likes.some(
      (id) => id.toString() == currentUserId,
    );
    if (alreadyLiked) {
      post.likes = post.likes.filter((id) => id.toString() != currentUserId);
    } else {
      post.likes.push(currentUserId);
    }

    await post.save();

    res.json({
      status: "SUCCESS",
      message: `Post ${alreadyLiked ? "unliked" : "liked"} successfully!`,
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error,
    });
  }
};

module.exports = {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
  togglePostLike,
};
