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

function addEngineer()