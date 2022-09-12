const Manager = require("../lib/manager.js");


// needs to test name, id, email, getOfficeNum(), and getRole()

describe("Manager", () => {

  
    // checks to make sure this is infact an object
    test('Makes sure that the Manager class can be created', () => {
      const managerTest = new Manager();
      expect(typeof(managerTest)).toBe('object')
    })

    // checks for manager name
    test('Can enter in a Manager\'s name.', () => {
      const testName = 'James';
      const managerTest = new Manager(testName);
      expect(managerTest.name).toBe(testName)
    })

    // checks for manager id
    test('Can enter in a Manager\'s id.', () => {
      const testId = '1234';
      const managerTest = new Manager('placeholder', testId);
      expect(managerTest.id).toBe(testId)
    })


    // checks for manager email
    test('Can enter in an Manager\'s email.', () => {
      const testEmail = 'test@test.com';
      const managerTest = new Manager('placeholder', 'placeholder', testEmail);
      expect(managerTest.email).toBe(testEmail)
    })

    // checks if manager 'getOfficeNum' method works
    test('Can retrieve Manager\'s office number.', () => {
      const managerTest = new Manager('placeholder', 'placeholder', 'placeholder', '65');
      expect(managerTest.getOfficeNum()).toBe('65')
    })

    // checks if manager 'getRole' method works
    test('Can retrieve Manager\'s role.', () => {
      const managerTest = new Manager('Manager');
      expect(managerTest.getRole()).toBe('Manager')
    })

})