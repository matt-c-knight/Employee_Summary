const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school, name, id, email) {
    super(name, id, title, email, role);
    this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "intern";
    }
}

module.exports = Intern;
