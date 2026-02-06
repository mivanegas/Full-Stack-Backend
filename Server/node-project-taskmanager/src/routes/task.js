const express = require("express");
const router = express.Router();

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.js");

const validateTask = require("../middlewares/validateTask.js");

// Return tasks - Route
router.get("/", getTasks);

// Create tasks - Route
router.post("/", validateTask, createTask);

// Update tasks - Route
router.patch("/:id", validateTask, updateTask);

// Delete tasks - Route
router.delete("/:id", deleteTask);

module.exports = router;
