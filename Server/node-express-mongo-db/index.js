const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectToDB = require("./db");
const todoRoutes = require("./src/routes/todo.routes");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("", todoRoutes);

app.get("/", (req, res) => {
  res.json({
    status: "OK",
    now: new Date(),
  });
});

connectToDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
});
