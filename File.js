// modules from Node JS that have functions that we can call that we dont have to write ourselves

//fs = file system
const fs = require("fs");
//path = where the file is located
const path = require("path");

//writing to a file
//function to start writing(path.join(current directory name, new file name) info to be written);
//this will always overwrite whats in the file

// fs.writeFileSync(path.join(__dirname,"MyFile.txt"), "Hello World");

//reading from a file
let myText = fs.readFileSync(path.join(__dirname, "MyFile.txt"));
console.log(myText.toString())
