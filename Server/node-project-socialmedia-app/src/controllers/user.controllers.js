const { ObjectId } = require("mongodb");
const connectToDB = require("../../db");

const fetchUser = async (req, res) => {
  try {
    const db = await connectToDB();
    const todoCollection = db.collection("todos");

    const todos = await todoCollection.find().toArray();

    res.json({
      status: "SUCCESS",
      data: todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        status: "FAILED",
        message: "Please enter valid title",
      });
    }

    const db = await connectToDB();
    const todoCollection = db.collection("todos");
    await todoCollection.insertOne({
      title,
      completed: false,
    });

    res.json({
      status: "SUCCESS",
      message: "Todo created successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    let dataToUpdate = {};

    if (title) {
      dataToUpdate.title = title;
    }

    if (completed && (completed == "true" || completed == "false")) {
      dataToUpdate.completed = completed == "false" ? false : true;
    }

    const db = await connectToDB();
    const todoCollection = db.collection("todos");
    await todoCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: dataToUpdate },
    );

    res.json({
      status: "SUCCESS",
      message: "Todo updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const db = await connectToDB();
    const todoCollection = db.collection("todos");
    await todoCollection.deleteOne({ _id: new ObjectId(id) });

    res.json({
      status: "SUCCESS",
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
};

module.exports = {
  fetchUser,
  createUser,
  updateUser,
  deleteUser,
};
