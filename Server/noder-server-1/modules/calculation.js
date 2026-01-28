function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// Common JS - default
// module.exports = {
//   add,
//   subtract,
//   multiply,
//   divide,
// };

// ES Module after changed type in json file
export { add, subtract, multiply, divide };
