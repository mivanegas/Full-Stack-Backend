const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const { isAuthenticated, isProfileOwner } = require("../middlewares/auth");

const {
  fetchUsers,
  signupUser,
  signinUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controllers");

// READ
router.get("/users", isAuthenticated, fetchUsers);

// CREATE
router.post("/users/signup", upload.single("profilePic"), signupUser);
router.post("/users/signin", signinUser);

// UPDATE
router.patch("/users/:id", isAuthenticated, isProfileOwner, updateUser);

// DELETE
router.delete("/users/:id", isAuthenticated, isProfileOwner, deleteUser);

module.exports = router;
