const express = require("express");
const router = express.Router();
const {
  fetchUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/todo.controllers");

router.get("/Users", fetchUser);

router.post("/todos", createUser);

router.patch("/todos/:id", updateUser);

router.delete("/todos/:id", deleteUser);

module.exports = router;
