//this class extends employee and adds info unique to intern types


const Employee = require("../lib/Employee.js");


class Intern extends Employee{

    
    constructor(name, id, email, school) {
        super(name, id, email, "Intern");
        this.school = school
    };
   
    getSchool() {
        return this.school
    };
}

module.exports = Intern;