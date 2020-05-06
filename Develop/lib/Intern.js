// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee.js");


class Intern extends Employee{

    
    constructor(school, name, id, email) {
        super(name, id, email);
        this.school = school
        this.role = "Intern"
    };
   
    getGithub() {
        return this.school
    };
}

module.exports = Intern;