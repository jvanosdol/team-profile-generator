const Intern = require("../lib/intern.js");


// needs to test name, id, email, getSchool(), and getRole()

describe("Intern", () => {

  
    // checks to make sure this is infact an object
    test('makes sure that the intern class can be created', () => {
      const internTest = new Intern();
      expect(typeof(internTest)).toBe('object')
    })

    // checks for intern name
    test('Can enter in an Intern\'s name.', () => {
      const testName = 'James';
      const internTest = new Intern(testName);
      expect(internTest.name).toBe(testName)
    })

    // checks for intern id
    test('Can enter in an Intern\'s id.', () => {
      const testId = '1234';
      const internTest = new Intern('placeholder', testId);
      expect(internTest.id).toBe(testId)
    })


    // checks for intern email
    test('Can enter in an Intern\'s email.', () => {
      const testEmail = 'test@test.com';
      const internTest = new Intern('placeholder', 'placeholder', testEmail);
      expect(internTest.email).toBe(testEmail)
    })

    // checks if intern 'getSchool' method works
    test('Can retrieve Intern\'s school.', () => {
      const internTest = new Intern('placeholder', 'placeholder', 'placeholder', 'UCLA');
      expect(internTest.getSchool()).toBe('UCLA')
    })

    // checks if intern 'getRole' method works
    test('Can retrieve Intern\'s role.', () => {
      const internTest = new Intern('Intern');
      expect(internTest.getRole()).toBe('Intern')
    })

})