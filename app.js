const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

function promptEmployee() {
    const questions = [{
    message: "What is your name?",   
    name: "name"},
    {
    message: "What is your id?",
    name: "id"},
    {
    message: "What is your title?",
    name: "title"
    }
    ]

inquirer
    .prompt(questions).then(({name,id,title}) => {
        // console.log(name);
        // console.log(id);
        // console.log(title);
        const employeeOne = new Employee(name, id, title);
        console.log(employeeOne.name);
    })

}
function promptEngineer() {
    const questions = [
    {
    message: "What is your Github username?",
    name: "github"},    
    {
    message: "What is your name?",   
    name: "name"},
    {
    message: "What is your id?",
    name: "id"},
    {
    message: "What is your title?",
    name: "title"},
   
    ]

inquirer
    .prompt(questions).then(({github,name,id,title}) => {
        // console.log(name);
        // console.log(id);
        // console.log(title);
        const engineerOne = new Engineer(github, name, id, title);
        console.log(engineerOne.github);
        buildProfile(engineerOne);
    })

}

function buildProfile(user) {
    fs.writeFile('team.html',`<!DOCTYPE html>
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
                                  ${user.name}
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">${user.github}</li>
                                  <li class="list-group-item">${user.id}</li>
                                  <li class="list-group-item">${user.title}</li>
                                </ul>
                        </div>
                </div>
                <div class="col-md-6">
                        <div class="card" style="width: 18rem;">
                                <div class="card-header">
                                  Featured
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">Cras justo odio</li>
                                  <li class="list-group-item">Dapibus ac facilisis in</li>
                                  <li class="list-group-item">Vestibulum at eros</li>
                                </ul>
                        </div>
                </div>
                  
            </div>
            <div class="row">
                    <div class="col-md-6">
                            <div class="card" style="width: 18rem;">
                                    <div class="card-header">
                                      Featured
                                    </div>
                                    <ul class="list-group list-group-flush">
                                      <li class="list-group-item">Cras justo odio</li>
                                      <li class="list-group-item">Dapibus ac facilisis in</li>
                                      <li class="list-group-item">Vestibulum at eros</li>
                                    </ul>
                            </div>
                    </div>
                    <div class="col-md-6">
                            <div class="card" style="width: 18rem;">
                                    <div class="card-header">
                                      Featured
                                    </div>
                                    <ul class="list-group list-group-flush">
                                      <li class="list-group-item">Cras justo odio</li>
                                      <li class="list-group-item">Dapibus ac facilisis in</li>
                                      <li class="list-group-item">Vestibulum at eros</li>
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
        }
    })
}

determineEmployee()
// buildProfile()



