const TASKS = [
  {
    id: 1,
    text: "Revise Intermediate JS",
    completed: false,
  },
  {
    id: 2,
    text: "Revise React Router",
    completed: true,
  },
  {
    id: 3,
    text: "Built portfolio project",
    completed: false,
  },
  {
    id: 4,
    text: "Explore JS string methods",
    completed: false,
  },
  {
    id: 5,
    text: "Revise middlewares",
    completed: true,
  },
];

let taskCounter = 6;

// Return tasks - controllers
const getTasks = (req, res) => {
  res.json({
    status: "SUCCESS",
    data: TASKS,
  });
};

// Create tasks - controllers
const createTask = (req, res) => {
  const { text } = req.body;

  const newTask = {
    id: taskCounter++,
    text,
    completed: false,
  };

  TASKS.push(newTask);

  res.json({
    status: "SUCCESS",
    message: "Task added successfully!",
  });
};

// Update  tasks - controllers
const updateTask = (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;

  let existingTask = TASKS.find((t) => t.id == id);
  if (!existingTask) {
    return res.status(400).json({
      status: "FAILED",
      message: "Task not found",
    });
  }

  if (text) {
    existingTask.text = text;
  }

  if (completed != undefined) {
    existingTask.completed = completed;
  }

  res.json({
    status: "SUCCESS",
    message: "Task updated successfully!",
  });
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
};
