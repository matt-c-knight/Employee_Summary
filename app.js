const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
var employee;
var engineer;
var manager;
var intern;

function promptEmployee() {
    const questions = [{
    message: "What is your name?",   
    name: "name"},
    {
    message: "What is your id?",
    name: "id"},
    {
    message: "What is your email?",
    name: "email"}
    ]

inquirer
    .prompt(questions).then(({name,id,email}) => {
        // console.log(name);
        // console.log(id);
        // console.log(title);
        employee = new Employee(name, id, email);
        
        // buildProfile(employee);
        determineEmployee();
        return employee;
    })

}
function promptEngineer() {
    const questions = [
   {
    message: "What is your name?",   
    name: "name"},
    {
    message: "What is your id?",
    name: "id"},
    {
    message: "What is your email?",
    name: "email"},
    {
    message: "What is your Github username?",
    name: "github"},    
    
    ]

inquirer
    .prompt(questions).then(({name,id,email, github}) => {
        // console.log(name);
        // console.log(id);
        // console.log(title);
        engineer = new Engineer(name, id, email, github);
        
        // buildProfile(engineer);
        determineEmployee();
        return engineer;
    })

}
function promptManager() {
    const questions = [
        {
        message: "What is your name?",   
        name: "name"},
        {
        message: "What is your id?",
        name: "id"},
        {
        message: "What is your email?",
        name: "email"},
        {
        message: "What is your office number?",
        name: "officenumber"},    
        
        
        ]
        inquirer
    .prompt(questions).then(({name,id, email, officenumber}) => {
        // console.log(name);
        // console.log(id);
        // console.log(title);
        manager = new Manager(name, id, email, officenumber);
        
        // buildProfile(engineer);
        determineEmployee();
        return manager;
    })
}
function promptIntern() {
    const questions = [
        {
        message: "What is your name?",   
        name: "name"},
        {
        message: "What is your id?",
        name: "id"},
        {
        message: "What is your email?",
        name: "email"},
        {
        message: "What is your school?",
        name: "school"},    
        ]
        inquirer
    .prompt(questions).then(({name,id,email, school}) => {
        // console.log(name);
        // console.log(id);
        // console.log(title);
        intern = new Intern(name, id, email, school);
        
        // buildProfile(engineer);
        determineEmployee();
        return intern;
    })
}
function buildProfile(user1, user2, user3, user4) {
    fs.writeFile('team.html', `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Employee Summary</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                        <div class="card" style="width: 18rem;">
                                <div class="card-header">
                                  ${user1.name}
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">${user1.id}</li>
                                  <li class="list-group-item">${user1.email}</li>
                                 </ul>
                        </div>
                </div>
                <div class="col-md-6">
                        <div class="card" style="width: 18rem;">
                                <div class="card-header">
                                ${user2.name}
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">${user2.id}</li>
                                  <li class="list-group-item">${user2.email}</li>
                                  <li class="list-group-item">${user1.github}</li>
                                </ul>
                        </div>
                </div>
                  
            </div>
            <div class="row">
                    <div class="col-md-6">
                            <div class="card" style="width: 18rem;">
                                    <div class="card-header">
                                    ${user3.name}
                                    </div>
                                    <ul class="list-group list-group-flush">
                                      <li class="list-group-item">${user3.id}</li>
                                      <li class="list-group-item">${user3.email}</li>
                                      <li class="list-group-item">${user3.officenumber}</li>
                                    </ul>
                            </div>
                    </div>
                    <div class="col-md-6">
                            <div class="card" style="width: 18rem;">
                                    <div class="card-header">
                                    ${user4.name}
                                    </div>
                                    <ul class="list-group list-group-flush">
                                      <li class="list-group-item">${user4.id}</li>
                                      <li class="list-group-item">${user4.email}</li>
                                      <li class="list-group-item">${user4.school}</li>
                                    </ul>
                            </div>
                    </div>
                      
                </div>
    
              
        </div> 
        
    </body>
    </html>`,
    function(err) {
      if (err) {
          throw err;
        }
    })
}


function determineEmployee() {
    const question = [{
        message: "What is your role?",
        name: "role"
    }]
    inquirer
    .prompt(question).then(answer => {
       let userAnswer = Object.values(answer);
       userAnswer = userAnswer.toString();
        if(userAnswer === "employee") {
            promptEmployee()
        } else if (userAnswer === "engineer") {
            promptEngineer()
        } else if (userAnswer === "manager") {
            promptManager()
        } else if (userAnswer === "intern") {
            promptIntern()
        } else if (userAnswer === "finished") {
            buildProfile(employee, engineer, manager, intern)
        }    })
}

determineEmployee()
// buildProfile()



