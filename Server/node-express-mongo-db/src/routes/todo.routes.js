const express = require("express");
const router = express.Router();
const {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controllers");

router.get("/todos", fetchTodos);

router.post("/todos", createTodo);

router.patch("/todos/:id", updateTodo);

router.delete("/todos/:id", deleteTodo);

module.exports = router;
