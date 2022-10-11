const Engineer = require('../lib/Engineer')

describe('Github', () => {
    it(`String of letters for the Engineer's GitHub page`, () => {
        expect(new Engineer('Thomas', 55, 'thomas@job.com', 'http://www.github.com/thomasjob').getGitHub()).toBe('http://www.github.com/thomasjob')
    })
})

describe('GetRole', () => {
    it('String of letters that describe the role of the Engineer overriding Employee.js getRole function', () => {
        expect(new Engineer('Greg', 69, 'greg@job.com', 'http://www.github.com/gregjob').getRole()).toBe("Engineer")
    })
})