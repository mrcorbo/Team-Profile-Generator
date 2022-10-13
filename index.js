const fs = require('fs')
const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

let employees = []

inquirer
    .prompt([
        {
            type: 'input',
            message: `What is the Manager's name?`,
            name: 'name'
        },
        {
            type: 'input',
            message: `What is the Manager's id?`,
            name: 'id'
        },
        {
            type: 'input',
            message: `What is the Manager's email?`,
            name: 'email'
        },
        {
            type: 'input',
            message: `What is the Manager's office number?`,
            name: 'officeNumber'
        }
    ]).then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
        employees.push(manager)
        menu()
    })
function menu() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Which type of employee would you like to add to the team?',
                choices: ['Intern', 'Engineer', 'End & Build Team'],
                name: 'menu'
            },

        ]).then((data) => {
            if (data.menu === 'Intern') {
                addIntern()
            } else if (data.menu === 'Engineer') {
                addEngineer()
            } else {
                fs.writeFile('./dist/index.html', buildTeam(employees), (err) => {
                    err ? console.log(err) : console.log('Success!')
                })
            }
        })
}
function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the Intern's name?`,
                name: 'name'
            },
            {
                type: 'input',
                message: `What is the Intern's id?`,
                name: 'id'
            },
            {
                type: 'input',
                message: `What is the Intern's email?`,
                name: 'email'
            },
            {
                type: 'input',
                message: "What school does the Intern attend?",
                name: 'school'
            }
        ]).then((data) => {
            const intern = new Intern(data.name, data.id, data.email, data.school)
            employees.push(intern)
            menu()
        })
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the Engineer's name?`,
                name: 'name'
            },
            {
                type: 'input',
                message: `What is the Engineer's id?`,
                name: 'id'
            },
            {
                type: 'input',
                message: `What is the Engineer's email?`,
                name: 'email'
            },
            {
                type: 'input',
                message: `What is the Engineer's github address?`,
                name: 'github'
            }
        ]).then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github)
            employees.push(engineer)
            menu()
        })
}

function buildTeam(employees) {
    let employeeHTML = ''
    for (i = 0; i < employees.length; i++) {
        if (employees[i].getRole() === "Manager") {
            employeeHTML += `<div class="card">
            <h3 class="card-header bg-info">
              Manager
            </h3>
            <div class="card-body">
            <p class="card-text">
            ${employees[i].name}
            <br>ID:${employees[i].id} 
            <br>Email: ${employees[i].email}
            <br>Phone: ${employees[i].officeNumber}
            </p>
            </div>
            </div>`
        } else if (employees[i].getRole() === "Intern") {
            employeeHTML += `<div class="card">
            <h3 class="card-header bg-info">
              Intern
            </h3>
            <div class="card-body">
            <p class="card-text">
            ${employees[i].name}
            <br>ID:${employees[i].id} 
            <br>Email: ${employees[i].email}
            <br>School: ${employees[i].school}
            </p>
            </div>
            </div>`
        } else {
            employeeHTML += `<div class="card">
            <h3 class="card-header bg-info">
              Engineer
            </h3>
            <div class="card-body">
            <p class="card-text">
            ${employees[i].name}
            <br>ID:${employees[i].id} 
            <br>Email: ${employees[i].email}
            <br>Github: ${employees[i].github}
            </p>
            </div>
            </div>`
        }
    }
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <title>Document</title>
    </head>
    <body>
        ${employeeHTML}
    </body>
    </html>`
}