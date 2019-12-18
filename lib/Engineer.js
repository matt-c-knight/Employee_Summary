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


const Shape = require("./shape");

class Rectangle extends Shape {
  constructor(sideA, sideB) {
    const area = sideA * sideB;
    const perimeter = sideA * 2 + sideB * 2;

    super(area, perimeter);
    this.sideA = sideA;
    this.sideB = sideB;
  }
}

const rectangle = new Rectangle(12, 9);
rectangle.printInfo();
