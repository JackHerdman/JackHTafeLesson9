const Student = require("./Student")
const fs = require("fs");

class StudentDataReader {
    constructor(fileName) {
        this.fileName = fileName;
    }
    getArrayFromFile() {
        return JSON.parse(fs.readFileSync(this.fileName).toString()).map(studentRaw => new Student(
            studentRaw.firstName,
            studentRaw.lastName,
            studentRaw.age,
            studentRaw.grades,
            studentRaw.teacherId,
            studentRaw.id
        ));
    }

    saveArrayToFile(value) {
        fs.writeFileSync(this.fileName, JSON.stringify(value));
    }

    getStudent(id) {
        return this.getArrayFromFile().find(student => student.id == id);
    }

    updateStudent(studentToUpdate) {
        let students = this.getArrayFromFile();
        let updatedStudents = students.map(studentInArray => {
            if (studentInArray.id == studentToUpdate.id) {
                return studentToUpdate;
            } else {
                return studentInArray;
            }
        })
        this.saveArrayToFile(updatedStudents);
    }

    deleteStudent(id) {
        this.saveArrayToFile(this.getArrayFromFile().filter(s => s.id != id));
    }

    addstudent(student) {
        this.saveArrayToFile(this.getArrayFromFile().concat([student]))
    }
}

module.exports = StudentDataReader;