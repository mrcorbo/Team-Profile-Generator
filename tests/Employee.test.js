const Employee = require('../lib/Employee')

describe('Name', () => {
    it('String of letters describing the name of Employee', () => {
        expect(new Employee('Janet').getName()).toBe('Janet')
    })
})
describe('ID', () => {
    it('ID number that is affiliated with the Employee', () => {
        expect(new Employee('John', 25).getId()).toBe(25)
    })
})
describe('email', () => {
    it('Email address associated with the Employee', () => {
        expect(new Employee('Ethan', 33, 'ethan@job.com').getEmail()).toBe('ethan@job.com')
    })
})
describe('Role', () => {
    it('Role associated with the Employee, unless otherwise stated, should return Employee', () => {
        expect(new Employee('Roger', 11, 'roger@job.com').getRole()).toBe('Employee')
    })
})