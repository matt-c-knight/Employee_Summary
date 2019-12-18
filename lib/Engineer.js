const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github, name, id, title) {
    super(name, id, title);
    this.github = github;
    }
    getGithub() {

    }
    getRole() {

    }
}


module.exports = Engineer;