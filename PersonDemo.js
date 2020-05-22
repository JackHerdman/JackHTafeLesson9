const path = require("path");
const StudentDataReader = require("./StudentDataReader");
const TeacherDataReader = require("./TeacherDataReader");


let _studentData = new StudentDataReader(path.join(__dirname, "Students.json"));
let _teacherData = new TeacherDataReader(path.join(__dirname, "Teachers.json"));

//updating teacher
let teacher = _teacherData.getTeacherById("7a673d78-a518-4630-8c58-3497ef3f10f7");
console.log(teacher);