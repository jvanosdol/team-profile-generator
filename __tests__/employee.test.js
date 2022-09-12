const Employee = require("../lib/employee.js");


// needs to test getName(), getId(), getEmail(), getRole()

describe("Employee", () => {

  
    // checks to make sure this is infact an object
    test('Makes sure that the Employee class can be created', () => {
      const employeeTest = new Employee();
      expect(typeof(employeeTest)).toBe('object')
    })

    // checks if Employee 'getName' method works
    test('Can retrieve Employee\'s name.', () => {
      const employeeTest = new Employee('James');
      expect(employeeTest.getName()).toBe('James')
    })

    // checks if Employee 'getId' method works
    test('Can retrieve Employee\'s id.', () => {
      const employeeTest = new Employee('placeholder', '1234');
      expect(employeeTest.getId()).toBe('1234')
    })

    // checks if Employee 'getEmail' method works
    test('Can retrieve Employee\'s email.', () => {
      const employeeTest = new Employee('placeholder', 'placeholder', 'test@test.com');
      expect(employeeTest.getEmail()).toBe('test@test.com')
    })
    
    // checks if employee 'getRole' method works
    test('Can retrieve Employee\'s role.', () => {
      const employeeTest = new Employee('Employee');
      expect(employeeTest.getRole()).toBe('Employee')
    })

})