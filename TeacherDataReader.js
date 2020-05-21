const Teacher = require("./Teacher")
const fs = require("fs");

class TeacherDataReader {
    constructor(fileName) {
        this.fileName = fileName;
    }
    get fileArray() {
        return JSON.parse(fs.readFileSync(this.fileName).toString()).map(teacherRaw => new Teacher(
            teacherRaw.firstName,
            teacherRaw.lastName,
            teacherRaw.age,
            teacherRaw.id
        ));
    }

    set fileArray(value) {
        fs.writeFileSync(this.fileName, JSON.stringify(value));
    }

    getTeacher(id) {
        return this.fileArray.find(teacher => teacher.id == id);
    }

    updateTeacher(teacher){
        this.fileArray = this.fileArray.map(t =>{
            if (t.id == teacher.id){
                return teacher;
            } else {
                return t;
            }
        })
    }

    deleteTeacher(id){
        this.fileArray = this.fileArray.Filter(t => t.id != id);
    }

    addTeacher(teacher){
        this.fileArray = this.fileArray.concat([teacher]);
    }
}

module.exports = TeacherDataReader;