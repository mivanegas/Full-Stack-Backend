const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./src/routes/user.routes");
const postRoutes = require("./src/routes/post.routes");
const commentRoutes = require("./src/routes/comment.routes");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static("uploads"));

app.use("", userRoutes);
app.use("", postRoutes);
app.use("", commentRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Social Media API",
    now: new Date(),
  });
});

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("MongoDB connected successfully ✅");
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT} ✅`);
  });
});

/*
  # Social Media App
    - Model
      - User
        - username (String, unique)
        - email (String, unique)
        - fullName (String)
        - bio (String)
        - profilePic (String)
        - timestamps (Date)
      - Post
        - author (ObjectId ref -> User)
        - content (String)
        - likes (Array[ObjectId ref -> User])
        - timestamps (Date)
      - Comment
        - post (ObjectId ref -> Post)
        - author (ObjectId ref -> User)
        - content (String)
        - timestamps (Date)

    - Routes:
      - users
        - GET /users (READ)
        - POST /users (CREATE)
        - PATCH /users/:id (UPDATE)
        - DELETE /users/:id (DELETE)
      - posts
        - GET /posts?author= (READ)
        - POST /posts (CREATE)
        - PATCH /posts/:id (UPDATE)
        - DELETE /posts/:id (DELETE)
        - POST /posts/:id/like-toggle (CREATE)
      - comment
        - GET /comments?postId= (GET)
        - POST /comments (CREATE)
        - PATCH /comments/:id (UPDATE)
        - DELETE /comments/:id (DELETE)

    ------------------------------------------
  # Social Media App (w/ Auth)
    - Model 
      - User ✅
        - password (String) 

    - Auth Middlewares
      - Authentication 
      - users
        - isProfileOwner 

    - Routes:
      - users (All routes are protected except signup and signin ) ✅
        - GET /users (READ)
          - Response body: Remove sensitive info (email, password) ✅
        - POST /users (CREATE) 
          -> POST /users/signup ✅
            - Auth Flow: Register a user + bcrypt
          -> POST /users/signin ✅
            - Auth Flow: Signing in a user + bcrypt + jwt
        - PATCH /users/:id (UPDATE)
          - Authorization: A user can update only their profile ✅
        - DELETE /users/:id (DELETE)
          - Authorization: A user can delete only their profile ✅
      - posts (All routes are protected) ✅
        - GET /posts?author= (READ)
        - POST /posts (CREATE)
          - Authorization: A user can create a post only for their account ✅
        - PATCH /posts/:id (UPDATE)
          - Authorization: A post can only be updated by the author ✅
        - DELETE /posts/:id (DELETE)
          - Authorization: A post can only be deleted by the author ✅
        - POST /posts/:id/like-toggle (CREATE)
          - Authorization: A user can like/unlike only for their account ✅ 
      - comment (All routes are protected) ✅
        - GET /comments?postId= (GET)
        - POST /comments (CREATE)
          - Authorization: A user can create a comment only for their account
        - PATCH /comments/:id (UPDATE)
          - Authorization: A comment can only be updated by the author of the comment ✅
        - DELETE /comments/:id (DELETE)
          - Authorization: A comment can be deleted by 
            - the author of the comment ✅
            - the author of the post ✅
*/
