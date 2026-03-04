const mongoose = require("mongoose");

// const profileSchema = mongoose.Schema({
//   reviews: Array,
//   preferences: Array,
//   addresses: Array,
//   paymentMethods: Array,
// });

const customerSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isPrime: Boolean,
});

// This creates new collections in MongoDB
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;

/* -------------------------- */
// Validations
// const customerSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Please provide valid name'],
//     minlength: [3, 'Name should have minimum 3 characters'],
//     maxlength: [10, 'Name should have maximum 10 characters']
//   },
//   email: {
//     type: String,
//     required: [true, 'Please provide valid email']
//   },
//   age: {
//     type: Number,
//     required: [true, 'Please provide valid age'],
//     min: [18, 'Min. allowed age is 18'],
//     max: [40, 'Max allowed age is 40']
//   },
//   isPrime: {
//     type: Boolean,
//     required: [true, 'Please provide valid iPrime value'],
//     // default: false
//   }
// })
