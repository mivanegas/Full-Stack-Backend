const express = require("express");
const router = express.Router();
const {
  isAuthenticated,
  isCommentAuthor,
  isCommentOrPostAuthor,
} = require("../middlewares/auth");

const {
  fetchComments,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/comment.controllers");

router.use(isAuthenticated);

// READ
router.get("/comments", fetchComments);

// CREATE
router.post("/comments", createComment);

// UPDATE
router.patch("/comments/:id", isCommentAuthor, updateComment);

// DELETE
router.delete("/comments/:id", isCommentOrPostAuthor, deleteComment);

module.exports = router;
