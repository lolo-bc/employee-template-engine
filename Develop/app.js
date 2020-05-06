const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const allEmployees = [];

async function addNewEmployee() {
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

async function newManager() {
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
      const manager = new Manager(val.name, val.employeeID, val.employeeID, val.officeNumber);
      allEmployees.push(manager);
      // If the user says yes to another run code again,  otherwise end
      if (val.choice) {
       addNewEmployee()
      } else {
        makeHTML();
      }
    });
};


async function newEngineer() {
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
       engineer = new Engineer(val.name, val.employeeID, val.employeeID, val.github);
        allEmployees.push(engineer);
        // If the user says yes to another run code again,  otherwise end
        if (val.choice) {
         addNewEmployee()
        } else {
          makeHTML();
        }
      });
};

async function newIntern() {
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
      intern = new Intern(val.name, val.employeeID, val.employeeID, val.school);
      allEmployees.push(intern);
      // If the user says yes to another run code again,  otherwise end
      if (val.choice) {
       addNewEmployee()
      } else {
         makeHTML();
      }
    });
};


async function makeHTML() {
    fs.writeFileSync(outputPath, render(allEmployees), "utf-8")
    console.log("\nGenerating your HTML file\n");
    process.exit(0);
  }

  addNewEmployee();
