function User(email, name, status) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function() {
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, 'has logged out')
}

function Admin(...args) {
    User.apply(this, args);
}

let adminEmail = 'j.vanosdol';
let adminName = 'james'
let adminStatus = true;

let userOne = new User('j.vanosdol99@yahoo.com', 'James')
let admin = new Admin(adminEmail, adminName, adminStatus)



console.log(admin);