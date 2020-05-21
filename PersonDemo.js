const path = require("path");
const StudentDataReader = require("./StudentDataReader");

let _studentData = new StudentDataReader(path.join(__dirname, "Students.json"));

console.log(_studentData.fileArray);