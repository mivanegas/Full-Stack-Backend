const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");

// Read operation - Synchronous (not preferable bc unpredictable)
// const data = fs.readFileSync("notes.txt", "utf-8");
// console.log(data);

/* ---------------------------------- */

// Read operation - Asynchronous (preferable)
// fs.readFile("notes.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log("Read file error:", error);
//     return;
//   }

//   console.log("Read file success:", data);
// });

// Read Operation using fs/promises module
// async function readNotesFile() {
//   try {
//     const data = await fs.readFile("sample.txt", "utf-8");
//     console.log("Read life success", data);
//   } catch (error) {
//     (console.log("Read life error"), error);
//   }
// }

// readNotesFile();

/* ---------------------------------- */

// Create operation

// fs.writeFile("test.txt", "This is a test file", (error) => {
//   if (error) {
//     console.log("Write file error:", error);
//     return;
//   }

//   console.log("Write file success:");
// });

// const content = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`;

// fs.writeFile("sample.txt", content, (error) => {
//   if (error) {
//     console.log("Write file error:", error);
//     return;
//   }

//   console.log("Write file success:");
// });
/* ---------------------------------- */

// Append Operation
// const content = `
// The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. `;

// fs.appendFile("sample.txt", content, (error) => {
//   if (error) {
//     console.log("Append file error:", error);
//     return;
//   }

//   console.log("Append file success:");
// });

/* ---------------------------------- */

// Delete Operation

// fs.unlink("notes.txt", (error) => {
//   if (error) {
//     console.log("Delete file error:", error);
//     return;
//   }

//   console.log("Delete file success:");
// });

/* ---------------------------------- */

// Example Problems

// Question 1: You're given are array of student. Add each student in individual lines in a new doc file

// const students = ["Walid", "Tarra", "Sonal", "Rebecca", "Mark"];

// // The file students.doc is created
// fs.writeFile("students.doc", "", (error) => {
//   if (error) {
//     console.log("Write file error:", error);
//     return;
//   }

//   console.log("Write file success:");
// });

// For each iterates through students, appends add them to bottom of doc
// async function addStudentsToDoc() {
//   try {
//     for (let student of students) {
//       const content = "\n" + student;
//       await fs.appendFile("students.doc", content);
//     }
//   } catch (error) {
//     console.log("Something went wrong", error);
//   }
// }

// addStudentsToDoc();

// Question 2: You're given a txt. file and are asked to copy the content of the input .txt file  into the output.txt

// fs.readFile("input.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   fs.writeFile("output.txt", data, (error) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//   });
// });

/* ---------------------------------- */

//  # Path Module
// console.log(__dirname);
// console.log(__filename);

// console.log(path.basename(__filename)); // returns the file name
// console.log(path.extname(__filename)); // returns file extension
// console.log(path.resolve("index.js")); // returns absolute path
// console.log(path.join(__dirname, "src", "index.js")); //creates path based on OS

// Ex: Using fs and path module together
// const filePath = path.join(__dirname, "files", "files.txt");
// fs.writeFile(filePath, "This is dummy content", (error) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log("Write successful");
// });

/* ---------------------------------- */
/*
    # Debugging
        1. Continue: Takes you to next breakpoint
        2. Step over: Execute the current line and go to the next
        3. Step into: Go inside a function
        4. Step over: return back from a function
        5. Restart: restarts the debugger
        6. Stop: stops the debugging process wherever it is

*/

function result(num1, num2) {
  let sum = num1 + num2;
  let product = num1 * num2;
  console.log(sum, product);
}

function abc() {
  console.log("abc");
  def();
}

function def() {
  console.log("def");
}

console.log("START");
result(10, 20);
abc();
console.log("END");
/*
    # File System (fs)
        - In-built  module: "fs" module
        - Let's Node.js interact with files and folders on the servers
        - Asynchronous Methods
            1. readFile (Read a specific file)
                - Syntax: 
                    fs.readFile("filename," 'utf-8',(error, data) => {
                        if(error) {
                          console.log("Read file error:", error )
                          return
                          }

                          console.log("Read file success:", data)
                        })

            2. writeFile (Create a file + write content)
                - Syntax:
                    fs.writeFile("filename", "contentToAdd", (error) => {
                        if(error) {
                          console.log("Write file error:", error )
                          return
                          }

                          console.log("Write file success:")
                        })

            3. appendFile (Add content to the end of the file content)
                - Syntax:
                    fs.appendFile("filename", "contentToAppend", (error) => {
                         if(error) {
                            console.log("Append file error:", error )
                              return
                              }

                              console.log("Append file success:")
                            })

            4. unlink (delete the file)
               - Syntax:
                    fs.unlink("filename", (error) => {
                         if(error) {
                            console.log("Delete file error:", error )
                              return
                              }

                              console.log("Delete file success:")
                            })
                    
     # Path (path) [Doesn't work in ES module system]
        - In-built module: 'path' module
        - Let's Node.js handle fil paths
        - 2 reserved keywords:
          - __dirname: Absolute directory(folder) path
          - __filename: Absolute file path
        
        - Methods:
          1. basement(): Returns the file name from the path string
          2. extname(): Returns the file extension
          3. resolve(): Returns the absolute path
          4. join(): Returns the file path, and automatically handles /, \ based on OS 


*/

// Additional Concept: How to handle read operation using async await
// Read Operation using fs/promises module
// async function readNotesFile() {
//   try {
//     const data = await fs.readFile("sample.txt", "utf-8");
//     console.log("Read life success", data);
//   } catch (error) {
//     (console.log("Read life error"), error);
//   }
// }

// readNotesFile();
