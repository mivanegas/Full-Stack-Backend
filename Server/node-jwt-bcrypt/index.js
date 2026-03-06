const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

const userRoutes = require("./src/routes/user.routes");

const isUserLoggedIn = (req, res, next) => {
  try {
    const obj = jwt.verify(req.headers.token, "ILoveNodejs");
    console.log(obj);
    next();
  } catch (error) {
    return res.status(401).send("You are not logged in. Please login first!");
  }
};

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("", userRoutes);

app.get("/", (req, res) => {
  res.send("Authentication Flow, bcrypt, JWT");
});

app.get("/dashboard", (req, res) => {
  const name = "Maria";
  res.send(`
    <h1>THIS IS THE DASHBOARD PAGE</h1>
    <h2>WELCOME ${name}!<h2>
    `);
});

mongoose.connect(process.env.MONGODB_URL).then(() => {
  app.listen(3000, () => {
    console.log("Server is ready :)");
  });
});

/*
  # bcrypt
    - Used to encrypt sensitive details
    - Methods:
      - hash(plainText, saltRounds): Hashing
      - compare(plainText, encryptedText): Comparing encryptedText w/ plainText

  # jsonwebtoken
    - JWT (JSON Web Token)
    - Used for managing auth and session info
    - Methods:
      - sign(payload, secretOrPrivateKey, options): Creates a JWT
      - verify(token, secretOrPublicKey): Verifies JWT + returns original payload 

  # Protected route:
    - A route that can be accessed by authenticated users only

  # Authentication vs Authorization:
    - Authentication: Who are you?
      - Unauthenticated response status code: 401 Unathorized
    - Authorization: What are you allowed to do?
      - Unauthorized response status code: 403 Forbidden

*/
