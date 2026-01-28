import fs from "fs";

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

/* ---------------------------------- */

fs.writeFile("test.txt", "This is a test file", (error) => {
  if (error) {
    console.log("Write file error:", error);
    return;
  }

  console.log("Write file success:");
});

/* ---------------------------------- */
/*
    # File System (fs)
        - In-built  module: "fs" module
        - Let's Node.js interact with files and folders on the servers
        - Asynchronous Methods
            1. readFile (Read a specific file)
                - Syntax: 
                    fs.readFile(filename, 'utf-8',(error, data) => {
                        if(error) {
                          console.log("Read file error:", error )
                          return
                          }

                          console.log("Read file success:", data)
                        })

            2. writeFile (Create a file + write content)
                - Syntax:
                    fs.writeFile(filename, contentToAdd, (error) => {
                        if(error) {
                          console.log("Write file error:", error )
                          return
                          }

                          console.log("Write file success:")
                        })

*/
