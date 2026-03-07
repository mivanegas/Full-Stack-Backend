const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const fetchUsers = async (req, res) => {
  try {
    const users = await User.find().select("username fullName profilePic bio");

    users.map((user) => {
      user.profilePic = process.env.BASE_URL + user.profilePic;
    });

    res.json({
      status: "SUCCESS",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
};

const signupUser = async (req, res) => {
  try {
    const { username, email, password, fullName, bio } = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);

    await User.create({
      username,
      email,
      password: encryptedPassword,
      fullName,
      bio,
      profilePic: `/uploads/${req.file.filename}`,
    });

    res.json({
      status: "SUCCESS",
      message: "User registered successfully!",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error,
    });
  }
};

const signinUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        status: "FAILED",
        message:
          "A user with this email does not exist. Please register first.",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        status: "FAILED",
        message: "Invalid credentials",
      });
    }

    const { _id } = user;
    const token = jwt.sign({ _id }, process.env.JWT_SECRET_KEY, {
      expiresIn: 24 * 60 * 60,
    });

    res.json({
      status: "SUCCESS",
      message: "User logged in successfully!",
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, bio } = req.body;
    await User.findByIdAndUpdate(id, { fullName, bio });

    res.json({
      status: "SUCCESS",
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);

    res.json({
      status: "SUCCESS",
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "FAILED",
      error,
    });
  }
};

module.exports = {
  fetchUsers,
  signupUser,
  signinUser,
  updateUser,
  deleteUser,
};
