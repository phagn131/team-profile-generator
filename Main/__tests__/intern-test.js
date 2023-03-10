
const Intern = require('../lib/Intern');

describe('creates an Intern object', () => {
    const intern = new Intern('Mary', 152, 'mary@upenn.edu', 'UPENN');
    
    expect(intern.school) .toEqual(expect.any(String));
});

describe('gets employee school', () => {
    const intern = new Intern('Mary', 152, 'mary@upenn.edu', 'UPENN');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Mary', 152, 'mary@upenn.edu', 'UPENN');

    expect(intern.getRole()).toEqual("Intern");
}); 