const Manager = require('../lib/Manager')

describe('getRole', () => {
    it('Role associated with the employee, overwriting Employee.getRole function', () => {
        expect(new Manager('Denise', 101, 'denise@job.com', `555-555-5555`).getRole()).toBe('Manager')
    })
})

describe('Office Number', () => {
    it('String of numbers representing the office phone number of manager', () => {
        expect(new Manager('Neil', 102, 'neil@job.com', '970-555-5555').getOfficeNumber()).toBe('970-555-5555')
    })
})