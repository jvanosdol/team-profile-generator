const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
        this.role = 'Manager';
    }

    getOfficeNum() {
        return this.officeNum;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;
// need to override 'getRole()' and return 'Manager'