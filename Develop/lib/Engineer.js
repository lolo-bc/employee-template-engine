// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee.js");


class Engineer extends Employee {
    
    constructor(github, name, id, email) {
        super(name, id, email);
        this.github = github
        const enRole = "Engineer"
        this.role = enRole

    };

    getGithub() {
        return this.github
    };
}

module.exports = Engineer