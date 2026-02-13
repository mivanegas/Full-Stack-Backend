const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Social Media API",
    now: new Date(),
  });
});

app.listen(process.env.PORT, () => {
    mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => console.log("MongoDB connected successfully ✅ "))
      .catch((error) => {console.log("DB connection error", error)
});

/*

    # Social Media App
        - Model
            - User
                - username (String, unique)
                - fullName (String, unique)
                - email (String)
                - bio (String)
                - profileImg (String)
                - timestamps (Date)
               
            - Post
                - author (ObjectId ref -> User)
                - content (String)
                - postImg (String)
                - likes (Array[ObjectId ref -> User])
                - timestamps (Date)

            - Comment
                - post (ObjectId ref -> Post)
                - author (ObjectId ref -> User)
                - content (String)
                - timestamps (Date)

        - Routes:
            - users
                - GET /users (Read)
                - POST /users (Create)
                - PATCH /users/:id (Update)
                - DELETE /users/:id (Delete)
                - GET /users/:id (Read)
             - posts
                - GET /posts (Read)
                - POST /posts (Create)
                - PATCH /posts/:id (Update)
                - DELETE /posts/:id (Delete)
                - GET /posts/:id (Read)
                - POST /posts/:id/like-toggle
            - comment
                - GET /comments?postId= (Read)
                - POST /comments (Create)
                - PATCH /comments/:id (Update)
                - DELETE /comments/:id (Delete)
                

*/
