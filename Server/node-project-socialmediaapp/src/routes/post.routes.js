const express = require("express");
const router = express.Router();
const { isAuthenticated, isPostAuthor } = require("../middlewares/auth");

const {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
  togglePostLike,
} = require("../controllers/post.controllers");

router.use(isAuthenticated);

// READ
router.get("/posts", fetchPosts);

// CREATE
router.post("/posts", createPost);

// UPDATE
router.patch("/posts/:id", isPostAuthor, updatePost);

// DELETE
router.delete("/posts/:id", isPostAuthor, deletePost);

// For Likes
router.post("/posts/:id/like-toggle", togglePostLike);

module.exports = router;
