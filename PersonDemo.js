const path = require("path");
const StudentDataReader = require("./StudentDataReader");
const TeacherDataReader = require("./TeacherDataReader");


let _studentData = new StudentDataReader(path.join(__dirname, "Students.json"));
let _teacherData = new TeacherDataReader(path.join(__dirname, "Teachers.json"));
// console.log(_studentData.fileArray);
console.log(_teacherData.fileArray);