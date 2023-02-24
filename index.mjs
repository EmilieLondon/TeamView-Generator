import inquirer from 'inquirer';

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.



inquirer
  .prompt([
    {
      type: 'input',
      message: "Please enter the team manager's name:",
      name: 'name',
    },
    {
      type: 'input',
      message: "Please enter the team manager's Employee ID:",
      name: 'id',
    },
    {
      type: 'input',
      message: "Please enter the team manager's email address:",
      name: 'email',
    },
    {
      type: 'input',
      message: "Please enter the team manager's office number:",
      name: 'office number',
    },
    {
      type: 'list',
      message: 'Do you wish to:',
      choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
      name: 'option',
    },
    {
      type: 'input',
      message: "Please enter the engineer's name:",
      name: 'name',
    },
    {
      type: 'input',
      message: "Please enter the engineer's Employee ID:",
      name: 'id',
    },
    {
      type: 'input',
      message: "Please enter the engineer's email address:",
      name: 'email',
    },
    {
      type: 'input',
      message: "Please enter the engineer's GitHub username:",
      name: 'github',
    },
    {
      type: 'list',
      message: 'Do you wish to:',
      choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
      name: 'option',
    },
    {
      type: 'input',
      message: "Please enter the intern's name:",
      name: 'name',
    },
    {
      type: 'input',
      message: "Please enter the intern's Employee ID:",
      name: 'id',
    },
    {
      type: 'input',
      message: "Please enter the intern's email address:",
      name: 'email',
    },
    {
      type: 'input',
      message: "Please enter the intern's school:",
      name: 'school',
    },
    {
      type: 'list',
      message: 'Do you wish to:',
      choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
      name: 'option',
    },
    
  ])
  .then((response) =>
  {
    console.log(response)

  


    }
  );