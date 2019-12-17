class Employee {
    constructor(name, id, title) {
        this.name = name;
        this.id = id;
        this.title = title;
    }
    getName() {

    }
    getEmail() {

    }
    getRole() {
        
    }
}









class Shape {
    constructor(area, perimeter) {
      this.area = area;
      this.perimeter = perimeter;
    }
  
    printInfo() {
      for (var key in this) {
        console.log(`${key}: ${this[key]}`);
      }
    }
  }
  
  module.exports = Shape;
  