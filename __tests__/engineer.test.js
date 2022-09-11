const Engineer = require("../lib/engineer.js");

test('makes sure that the engineer class can be created', () => {
  const engineerTest = new Engineer();
  expect(typeof(engineerTest)).toBe('object')
})

test('Can enter in an Engineer\'s name.', () => {
  const name = 'James';
  const engineerTest = new Engineer(name);
  expect(engineerTest.name).toBe(name)
})

// need to test email, github, getGithub, and getRole()

