// using Employee constructor 
const Employee = require('../lib/Employee');

describe('creates an employee object', () => {
    const employee = new Employee('Paul', 15, 'paul@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

describe('get employee name', () => {
    const employee = new Employee('Paul', 15, 'paul@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('get employee ID', () => {
    const employee = new Employee('Paul', 15, 'paul@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

describe('get employee email', () => {
    const employee = new Employee('Paul', 15, 'paul@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

describe('get employee role', () => {
    const employee = new Employee('Paul', 15, 'paul@email.com');

    expect(employee.getRole()).toEqual("Employee");
}); 