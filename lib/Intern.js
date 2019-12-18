const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school, name, id, title) {
    this.school = school;
    }
    getSchool() {
        
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
