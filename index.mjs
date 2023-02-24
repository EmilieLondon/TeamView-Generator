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
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      choices: ['English', 'Spanish', 'French'],
      name: 'language',
    },
    {
      type: 'checkbox',
      message: 'What is your preferred mode of communication?',
      choices: ['Email', 'Text', 'Call'],
      name: 'communication',
    },
  ])
  .then((response) =>
  {
    console.log(response)

  


    }
  );