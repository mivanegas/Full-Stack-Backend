const jwt = require("jsonwebtoken");
const Post = require("../models/post.models");
const Comment = require("../models/comment.models");

// Authentication Middleware
const isAuthenticated = (req, res, next) => {
  try {
    const { token } = req.headers;
    const { _id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req._id = _id;
    next();
  } catch (error) {
    return res.status(401).send("Authentication failed. Please login first");
  }
};

// Authorization Middleware
const isProfileOwner = (req, res, next) => {
  const currentUserId = req._id;

  if (currentUserId != req.params.id) {
    return res
      .status(403)
      .send("Authorization failed. You are not the owner of thr profile.");
  }
  next();
};

// For PATCH & DELETE
const isPostAuthor = async (req, res, next) => {
  try {
    const currentUserId = req._id;
    const postId = req.params.id;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(400).send("Post does not exist.");
    }

    if (currentUserId != post.author) {
      return res
        .status(403)
        .send("Authorization failed. You are not the owner of this post.");
    }
    next();
  } catch (error) {
    return res.status(500).send("Something went wrong.");
  }
};

const isCommentAuthor = async (req, res, next) => {
  try {
    const currentUserId = req._id;
    const commentId = req.params.id;

    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(400).send("Comment does not exist.");
    }

    if (currentUserId != comment.author) {
      return res
        .status(403)
        .send("Authorization failed. You are not the owner of this comment.");
    }
    next();
  } catch (error) {
    return res.status(500).send("Something went wrong.");
  }
};

const isCommentOrPostAuthor = async (req, res, next) => {
  try {
    const currentUserId = req._id;
    const commentId = req.params.id;

    const comment = await Comment.findById(commentId).populate("post");
    if (!comment) {
      return res.status(400).send("Comment does not exist.");
    }

    if (
      currentUserId == comment.author ||
      currentUserId == comment.post.author
    ) {
      next();
    } else {
      res
        .status(403)
        .send(
          "Authorization failed. You are not the owner of this comment or post.",
        );
    }
  } catch (error) {
    return res.status(500).send("Something went wrong.");
  }
};

module.exports = {
  isAuthenticated,
  isProfileOwner,
  isPostAuthor,
  isCommentAuthor,
  isCommentOrPostAuthor,
};
