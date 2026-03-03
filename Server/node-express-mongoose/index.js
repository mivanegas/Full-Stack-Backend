const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const customerRoutes = require("./src/routes/customer.routes");
const sellerRoutes = require("./src/routes/seller.routes");
const productRoutes = require("./src/routes/product.routes");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("", customerRoutes);
app.use("", sellerRoutes);
app.use("", productRoutes);

app.get("/", (req, res) => {
  res.send("We are learning Mongoose ODM");
});

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Server is ready :)"))
    .catch((error) => console.log("Database connection error", error));
});

/* 
  # Mongoose: ODM (Object Data Modelling) Library for MongoDB
    - Mongoose helps define schema for collection
    - Advantages:
      - Schema
      - Validation
        - Custom error messages
      - Predictable data
    - Schema: Blueprint/structure of documents to be stored in a collection
      -  const userSchema = new mongoose.Schema({
          a: String,
          b: Number,
          c: Boolean
        })
    - Model: JS Constructor for each document to be stored in a collection
      - const User = mongoose.model('User', userSchema)
      - Naming Convention
        - Pascal Case
        - Singular form
      - A collection is automatically created in MongoDB using Model name in Lower case + Plural form
        - Eg:
          - Customer: customers
          - Product: products
          - Supplier: suppliers
        
    - CRUD Operations
      | OPERATION | HTTP METHOD | MONGOOSE METHOD
      | CREATE    | POST        | create()
      | READ      | GET         | find()
      | UPDATE    | PATCH       | findByIdAndUpdate()
      | DELETE    | DELETE      | findByIdAndDelete()

    - Additional code:
      - This line can be added in catch block to send validation error message to the client
      if(error.message.includes('validation failed')) {
        return res.status(500).json({
          status: 'FAILED',
          message: error.message
        })
      }

    - Reference Docs:
      - https://mongoosejs.com/docs/guide.html
      - https://www.geeksforgeeks.org/node-js/mongoose-tutorial/

    -----------------------------------------------------

    # Model Relationships
      - References ***
        - Ideal: Whenever independent mongodb collections have related information
        - Create a reference from one model to another model using _id
        - Types:
          - 1:1 (Customer:Profile)
          - 1:many (Seller:Products) 
            - Not recommended, convert to many:1 instead
          - many:1 *** (Products:Seller)
          - many:many (Course:Student, Book:Author)
        - Syntax
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: Entity
          }
        - Access related document from another entity using ObjectId reference: .populate('field')
      - Embedded Documents:
        - Ideal: When creating a separate mongodb collection is not needed
        - Place the complete data within the document itself


*/
