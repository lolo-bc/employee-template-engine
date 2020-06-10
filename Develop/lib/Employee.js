//This class is used for each type of employee to gather basic information 

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role || "Employee"
    };
  
    getName(){
        return this.name
    };

    getEmail() {
        return this.email
    };

    getId(){
        return this.id
    };

    getRole(){
        return this.role
    };

}

module.exports = Employee