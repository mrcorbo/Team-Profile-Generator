const Employee = require('../lib/Employee')

describe('Name', () => {
    it('String of letters describing the name of Employee', () => {
        expect(new Employee("Janet").getName()).toBe("Janet")
    })
})