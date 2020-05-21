const Student = require("./Student")
const fs = require("fs");

class StudentDataReader {
    constructor(fileName) {
        this.fileName = fileName;
    }
    get fileArray() {
        return JSON.parse(fs.readFileSync(this.fileName).toString()).map(studentRaw => new Student(
            studentRaw.firstName,
            studentRaw.lastName,
            studentRaw.age,
            studentRaw.grades,
            studentRaw.teacherId,
            studentRaw.id
        ));
    }

    set fileArray(value) {
        fs.writeFileSync(this.fileName, JSON.stringify(value));
    }

    getStudent(id) {
        return this.fileArray.find(student => student.id == id);
    }

    updateStudent(student){
        this.fileARray = this.fileArray.map(s =>{
            if (s.id == student.id){
                return student;
            } else {
                return s;
            }
        })
    }

    deleteStudent(id){
        this.fileArray = this.fileArray.Filter(s => s.id != id);
    }

    addstudent(student){
        this.fileArray = this.fileArray.concat([student]);
    }
}

module.exports = StudentDataReader;