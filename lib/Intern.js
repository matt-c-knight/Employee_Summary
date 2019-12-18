const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school, name, id, title, email) {
    super(name, id, title, email);
    this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
