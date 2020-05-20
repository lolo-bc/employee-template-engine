//this class extends employee and adds info unique to manager types


const Employee = require("../lib/Employee.js");

class Manager extends Employee{

    
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "Manager");
        this.officeNumber = officeNumber
    };


   
    getOfficeNumber() {
        return this.officeNumber
    };
}

module.exports = Manager;