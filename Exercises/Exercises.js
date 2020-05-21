const fs = require("fs");
const path = require("path");

// File System
//1. Create a function that takes 2 arguments. The first should be a file name and the second should be content. The function should create a file with the given name in the current directory with content equal to the content argument

const createFile = (fileName, content) => {
     fs.writeFileSync(path.join(__dirname, fileName), content);
}
createFile("Hello.txt", "Hello World");

//2. Create a function that takes 1 argument, a file name. The function should return a string that is the whole file.

const fileName = fileName => `The file is located at ${__dirname}${fileName}`

console.log(fileName("Hello.txt"));

// JSON
//1. Create a class called student. It should have 4 properties (firstName, lastName, age, grades) with a constructor to set them all. Create an instance method that returns a json string representing the object.
class Student {
    constructor(firstName, lastName, age, grades) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.age = age,
            this.grades = grades
    }
    getJson(student) {
        return JSON.stringify(student);
    }

    //2. Create a static method that takes a json string representing the object and returns a new instance of student
    static newStudent(student) {
        return JSON.parse(student);
    }

    // Reading and Writing JSON Files
    //1. Create a method that writes an array of students to a json file
    static setStudentArray(studentArray) {
        fs.writeFileSync(path.join(__dirname, "studentsArray.json"), JSON.stringify(studentArray));
    }
    //2. Create a method that retrieves a list of students from a json file and returns them as student objects
   static getStudentArray() {
        let studentsRaw = JSON.parse(fs.readFileSync(path.join(__dirname, "studentsArray.json")).toString());
        let students = studentsRaw.map(students => new Student(students.firstName, students.lastName, students.age, students.grades, students.id));
        return students;
    }
}

let studentsArray = [{
    "firstName": "Noah",
    "lastName": "Anderson",
    "age": 38,
    "id": "2bcf24e8-db51-47f8-9bb9-42b4171f8bbe",
    "teacherId": "7a673d78-a518-4630-8c58-3497ef3f10f7",
    "grades": [
        29,
        18,
        6,
        68,
        16,
        71
    ]
},
{
    "firstName": "Oliver",
    "lastName": "Brown",
    "age": 44,
    "id": "07f76417-4bfc-449d-ad6c-ab4d1668f2ff",
    "teacherId": "7a673d78-a518-4630-8c58-3497ef3f10f7",
    "grades": [
        59,
        23,
        81,
        59,
        32
    ]
}]

console.log(Student.getStudentArray());
