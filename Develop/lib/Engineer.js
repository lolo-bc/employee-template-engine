// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer {

    
    constructor(github) {
        this.github = github
    };

    constructor(role) {
        this.role = "Engineer"
    };

   
    getGithub() {
        return this.github
    };
}