const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const team = [];

// Initial prompt
startProgram()
async function startProgram() {
  console.log("Please enter information for the Team Manager:");
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the team manager's name:",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter the team manager's Employee ID:",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter the team manager's email address:",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter the team manager's office number:",
        name: "officeNumber",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      team.push(manager);
      promptUser();
    });
}

// Engineer option
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the engineer's name:",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter the engineer's Employee ID:",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter the engineer's email address:",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter the engineer's GitHub username:",
        name: "github",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      team.push(engineer);
      promptUser();
    });
}

// Intern option
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the intern's name:",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter the intern's Employee ID:",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter the intern's email address:",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter the intern's school:",
        name: "school",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      team.push(intern);
      promptUser();
    });
}

// Offering options
function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Do you wish to:",
        choices: [
          "Add an engineer",
          "Add an intern",
          "Finish building the team",
        ],
      },
    ])

    // prompt according to option selected
    .then((answers) => {
      switch (answers.action) {
        case "Add an engineer":
          addEngineer();
          break;
        case "Add an intern":
          addIntern();
          break;
        case "Finish building the team":
          // render team and create HTML file saved in Output folder
          const html = render(team);
          const outputPath = path.join(OUTPUT_DIR, "team.html");
          fs.writeFile(outputPath, html, (err) => {
            if (err) throw err;
            console.log(`Team profile page generated at ${outputPath}`);
          });
          break;
        default:
          break;
      }
    });
}

