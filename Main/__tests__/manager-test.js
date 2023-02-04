// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
describe('creates an Manager object', () => {
    const manager = new Manager('Beth', 1, 'beth@email.com', 8);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Beth', 1, 'beth@email.com');

    expect(manager.getRole()).toEqual("Manager");
}); 