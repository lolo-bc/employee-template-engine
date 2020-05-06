// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee.js");


class Manager extends Employee{

    
    constructor(officeNumber, name, id, email) {
        super(name, id, email);
        this.officeNumber = officeNumber
        this.role = "Engineer"
    };


   
    getofficeNumber() {
        return this.officeNumber
    };
}

module.exports = Manager;