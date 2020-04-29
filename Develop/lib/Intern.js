// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee.js");


class Intern {

    
    constructor(school) {
        this.school = school
    };

    constructor(role) {
        this.role = "Intern"
    };

   
    getGithub() {
        return this.school
    };
}