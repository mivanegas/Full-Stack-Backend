// How to create a server with Node.js
import { createServer } from "http";

const server = createServer((req, res) => {
  res.end("Hello World!");
});

server.listen(3000, () => {
  console.log("Server is running :)");
});

/* ---------------------------------- */
// Common JS - default
// const { add, subtract, multiply, divide } = require("./modules/calculation");
// const getFullName = require("./modules/user");

// ES Module after changed type in json file
// import { add, subtract, multiply, divide } from "./modules/calculation.js";
// import getFullName from "./modules/user.js";

// const num1 = 5,
//   num2 = 10;

// console.log(add(num1, num2));
// console.log(subtract(num1, num2));
// console.log(multiply(num1, num2));
// console.log(divide(num1, num2));

// const firstName = "Maria";
// const lastName = "Vanegas";
// console.log(getFullName(firstName, lastName));

/*
 
    # Setup a node.js server folder structure
      - create an index.js (main file)
      - Run command: npm init (initialize/ create package.json file)
          - the json file has the meta data. It has an overview of the application 
          - package name
          - version
          - description
          - entry point (index.js)
          - keywords (tags)
          - author
      - OR npm init -y (creates json file with default options)
      - To execute code in file like console enter: node index (in terminal)


      # Modules systems in JS
        - Common JS (default)
          - export: modules.exports = xyz
          - import: const xyz = required('path')
        - ES Module (React)
          - "type": "module" in package.json
          - export: export default xyz
          - import: import xyz from "path"
*/
