class Engineer extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}

// need to override 'getRole()' with 'Engineer'