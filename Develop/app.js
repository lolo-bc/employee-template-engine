const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//array to hold all the info user inputs before rendering
const allEmployees = [];

//main menu which promts for employee type
 function addNewEmployee() {
    return inquirer 
    .prompt([
    {
        type: "list",
        name: "whichEmployee",
        message: "Which type of Employee would you like to add?",
        choices: ['Manager',  new inquirer.Separator(), 'Engineer',  new inquirer.Separator(), 'Intern']
    }
    
    ])
    .then(val => {
        if (val.whichEmployee === 'Engineer') {
          newEngineer();
        } else if (val.whichEmployee === 'Intern') {
         newIntern()
       } else if (val.whichEmployee === 'Manager') {
          newManager();
        } else {
         makeHTML();
        }
      });
};


//question prompts if manager is chosen
 function newManager() {
  return inquirer 
  .prompt([
  {
      type: "input",
      name: "employeeName",
      message: "Name: ",
   },
   {
      type: "input",
      name: "employeeID",
      message: "Employee ID: ",
   },
   {
      type: "input",
      name: "employeeEmail",
      message: "Email adress: ",
   },
   {
      type: "input",
      name: "officeNumber",
      message: "Office number: ",
   },
   {
      type: "confirm",
      name: "choice",
      message: "Would you like to add another employee?"
    }
  ])
  
  .then(val => {
      const manager = new Manager(val.employeeName, val.employeeID, val.employeeEmail, val.officeNumber);
      allEmployees.push(manager);
      // If the user says yes to another run code again,  otherwise end
      if (val.choice) {
       addNewEmployee()
      } else {
        makeHTML();
      }
    });
};


//question prompts in engineer type is chosen 
 function newEngineer() {
    return inquirer 
    .prompt([
    {
        type: "input",
        name: "employeeName",
        message: "Name:",
     },
     {
        type: "input",
        name: "employeeID",
        message: "Employee ID:",
     },
     {
        type: "input",
        name: "employeeEmail",
        message: "Email adress:",
     },
     {
        type: "input",
        name: "github",
        message: "Gitbub username:",
     },
     {
        type: "confirm",
        name: "choice",
        message: "Would you like to add another employee?"
      }
    ])
    .then(val => {
       engineer = new Engineer(val.employeeName, val.employeeID, val.employeeEmail, val.github);
        allEmployees.push(engineer);
        // If the user says yes to another run code again,  otherwise end
        if (val.choice) {
         addNewEmployee()
        } else {
          makeHTML();
        }
      });
};

//question prompts if intern is chosen
 function newIntern() {
  return inquirer 
  .prompt([
  {
      type: "input",
      name: "employeeName",
      message: "Name:",
   },
   {
      type: "input",
      name: "employeeID",
      message: "Employee ID:",
   },
   {
      type: "input",
      name: "employeeEmail",
      message: "Email adress:",
   },
   {
      type: "input",
      name: "school",
      message: "What school do they attend? ",
   },
   {
      type: "confirm",
      name: "choice",
      message: "Would you like to add another employee?"
    }
  ])
  .then(val => {
      intern = new Intern(val.employeeName, val.employeeID, val.employeeEmail, val.school);
      allEmployees.push(intern);
      if (val.choice) {
       addNewEmployee()
      } else {
         makeHTML();
      }
    });
};

//render fucntion once all employees are added 
function makeHTML() {
    fs.writeFileSync(outputPath, render(allEmployees), "utf-8")
    console.log("\nGenerating your HTML file\n");
    process.exit(0);
  }

  addNewEmployee();
