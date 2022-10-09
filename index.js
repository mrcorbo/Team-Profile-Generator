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

                }else if(data.choices === 'Engineer'){

                }else{
                    
                }
            })
    }