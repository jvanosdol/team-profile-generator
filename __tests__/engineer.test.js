const Engineer = require("../lib/engineer.js");


// needs to test name, id, email, getGithub, and getRole()

describe("Engineer", () => {

  
    // checks to make sure this is infact an object
    test('Makes sure that the Engineer class can be created', () => {
      const engineerTest = new Engineer();
      expect(typeof(engineerTest)).toBe('object')
    })

    // checks for engineer name
    test('Can enter in an Engineer\'s name.', () => {
      const testName = 'James';
      const engineerTest = new Engineer(testName);
      expect(engineerTest.name).toBe(testName)
    })

    // checks for engineer id
    test('Can enter in an Engineer\'s id.', () => {
      const testId = '1234';
      const engineerTest = new Engineer('placeholder', testId);
      expect(engineerTest.id).toBe(testId)
    })


    // checks for engineer email
    test('Can enter in an Engineer\'s email.', () => {
      const testEmail = 'test@test.com';
      const engineerTest = new Engineer('placeholder', 'placeholder', testEmail);
      expect(engineerTest.email).toBe(testEmail)
    })

    // checks if engineer 'getGithub' method works
    test('Can retrieve Engineer\'s GitHub account.', () => {
      const engineerTest = new Engineer('placeholder', 'placeholder', 'placeholder', 'test@github.com');
      expect(engineerTest.getGithub()).toBe('test@github.com')
    })

    // checks if engineer 'getRole' method works
    test('Can retrieve Engineer\'s role.', () => {
      const engineerTest = new Engineer('Engineer');
      expect(engineerTest.getRole()).toBe('Engineer')
    })

})
