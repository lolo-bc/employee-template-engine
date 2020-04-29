// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee.js");


class Manager {

    
    constructor(officeNumber) {
        this.officeNumber = officeNumber
    };

    constructor(role) {
        this.role = "Engineer"
    };

   
    getofficeNumber() {
        return this.officeNumber
    };
}