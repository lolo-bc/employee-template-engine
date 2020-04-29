// TODO: Write code to define and export the Employee class
const Employee = require("../lib/Employee.js");

class Employee {
    constructor(name) {
        this.name = name;
    };
    constructor(role) {
        this.role = role;
    };
    constructor(email) {
        this.email = email
    };
    constructor(id) {
        this.id = id
    };

    getName(){
        return this.name
    };

    getRole(){
        return this.role
    };

    getEmail() {
        return this.email
    };

    getId(){
        return this.id
    };


}