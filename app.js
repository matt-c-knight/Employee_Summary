const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

function determineEmployee() {
    const question = [{
        message: "What is your role?",
        name: "role"
    }]
    inquirer
    .prompt(question).then
}

// function promptUser() {
//     const questions = [{
//     message: "What is your name?",   
//     name: "name"},
//     {
//     message: "What is your id?",
//     name: "id"},
//     {
//     message: "What is your title?",
//     name: "title"
//     }
//     ]

// inquirer
//     .prompt(questions).then(({name,id,title}) => {
//         // console.log(name);
//         // console.log(id);
//         // console.log(title);
//         const employeeOne = new Employee(name, id, title);
//         console.log(employeeOne.name);
//     })

// }

// promptUser()