const Teacher = require("./Teacher")
const fs = require("fs");

class TeacherDataReader {
    constructor(fileName) {
        this.fileName = fileName;
    }
    getArrayFromFile() {
        return JSON.parse(fs.readFileSync(this.fileName).toString()).map(teacherRaw => new Teacher(
            teacherRaw.firstName,
            teacherRaw.lastName,
            teacherRaw.age,
            teacherRaw.id
        ));
    }

    saveArrayToFile(teachers) {
        fs.writeFileSync(this.fileName, JSON.stringify(teachers));
    }

    getTeacherById(id) {
        let teachers = this.getArrayFromFile();
        return teachers.find(teacher => teacher.id == id);
    }

    updateTeacher(teacherToUpdate) {
        let teachers = this.getArrayFromFile();
        let updatedTeachers = teachers.map(teacherInArray => {
            if (teacherInArray.id == teacherToUpdate.id) {
                return teacherToUpdate;
            } else {
                return teacherInArray;
            }
        })
        this.saveArrayToFile(updatedTeachers);
    }

    deleteTeacher(id) {
        let newTeacherArray = this.getArrayFromFile().filter(teacher => teacher.id != id);
        this.saveArrayToFile(newTeacherArray);
    }

    addTeacher(teacher) {
        let newTeacherArray = this.getArrayFromFile().concat([teacher]);
        this.saveArrayToFile(newTeacherArray)
    }
}

module.exports = TeacherDataReader;