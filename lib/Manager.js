const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber, name, id, email) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumnber;
    }
    getRole() {
        return "manager";
    }
}

module.exports = Manager;