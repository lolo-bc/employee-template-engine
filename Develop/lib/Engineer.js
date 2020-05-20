//this class extends employee and adds info unique to engineer types

const Employee = require("../lib/Employee.js");


class Engineer extends Employee {
    
    constructor(name, id, email, github) {
        super(name, id, email, "Engineer");
        this.github = github;

    };

    getGithub() {
        return this.github;
    };
}

module.exports = Engineer