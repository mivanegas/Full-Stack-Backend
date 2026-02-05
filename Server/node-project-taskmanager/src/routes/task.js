const express = require("express");
const router = express.Router();

const { getTasks, createTask, updateTask } = require("../controllers/task.js");

// Return tasks - Route
router.get("/", getTasks);

// Create tasks - Route
router.post("/", createTask);

// Update tasks - Route
router.patch("/:id", updateTask);

module.exports = router;
