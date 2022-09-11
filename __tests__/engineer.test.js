const Engineer = require("../lib/engineer.js");


describe("Engineer", () => {

  
// checks to make sure this is infact an object
test('makes sure that the engineer class can be created', () => {
  const engineerTest = new Engineer();
  expect(typeof(engineerTest)).toBe('object')
})

// checks for engineer name
test('Can enter in an Engineer\'s name.', () => {
  const testName = 'James';
  const engineerTest = new Engineer(testName);
  expect(engineerTest.name).toBe(testName)
})

// checks for engineer name
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

// checks for engineer github
test('Can enter in an Engineer\'s github account.', () => {
  const testGithub = 'test@github.com';
  const engineerTest = new Engineer('placeholder', 'placeholder', 'placeholder', testGithub);
  expect(engineerTest.github).toBe(testGithub)
})

// checks if engineer 'getGithub' method works
test('Can retrieve Engineer\'s GitHub account.', () => {
  const engineerTest = new Engineer('placeholder', 'placeholder', 'placeholder', 'test@github.com');
  expect(engineerTest.getGithub()).toBe('test@github.com')
})

// checks if engineer 'getRole' method works
test('Can retrieve Engineer\'s name.', () => {
  const engineerTest = new Engineer('James');
  expect(engineerTest.getName()).toBe('James')
})

// need to test email, github, getGithub, and getRole()

})
