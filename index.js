const inquirer = require("inquirer");
const fs = require("fs");

//Classes
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

//Card Templates
const addEngineerCard = require('./src/engineercard');
const addInternCard = require('./src/interncard');
const addManagerCard = require('./src/managercard');
const wrapcards = require('./src/cardwrap');

//Prompts
const team = []