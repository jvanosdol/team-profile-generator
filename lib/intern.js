const Employee = require('./employee.js')



class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}

let intern1 = new Intern('james', 106, 'j.vanosodl', 'eastlake')
let intern2 = new Intern('eastlake')

console.log(Object.values(intern1))
console.log(Object.keys(intern1))


console.log(Object.values(intern2))
console.log(Object.keys(intern2))

console.log(intern2)

// need to add 'getSchool' function
// need to override 'getRole()' with 'Intern'