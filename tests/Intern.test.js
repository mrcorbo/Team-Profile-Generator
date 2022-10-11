const Intern = require('../lib/Intern')

describe('School', () => {
    it('String of letters describing the school that Intern attends', () => {
        expect(new Intern('Stef', 38, 'stef@job.com', 'UC Berkeley').getSchool()).toBe('UC Berkeley')
    })
})

describe('Role', () => {
    it('Should return the role Intern, overriding employee function', () => {
        expect(new Intern('Ashley', 98, 'ashley@job.com', 'MIT').getRole()).toBe('Intern')
    })
})