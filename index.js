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
    ]).then((data) =>{
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
        employees.push(manager)
    })
    function menu(){
        inquirer    
            .prompt([
                {
                    type: 'list',
                    message: 'Which type of employee would you like to add to the team?',
                    choices: ['Intern', 'Engineer', 'End & Build Team']
                },

            ]).then((data) => {
                if(data.choices === 'Intern'){
                    addIntern()
                }else if(data.choices === 'Engineer'){

                }else{
                    fs.writeFile('./dist/index.html', buildTeam(employees), (err) => {
                        err ? console.log(err) : console.log('Success!')
                    })
                }
            })
    }
function addIntern(){
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

function addEngineer(){

}

function buildTeam(employees){
    let employeeHTML = ''
    for(i=0; i<employees.length; i++){
        if(employees[i].getRole() === "Manager"){
            employeeHTML += `Put HTML for Manager Card here`
        }else if(employees[i].getRole() === "Intern"){
            employeeHTML += `Put HTML for Intern Card here`
        }else{
            employeeHTML += `Put HTML for Engineer Card here`
        }
    }
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${employeeHTML}
    </body>
    </html>`
}