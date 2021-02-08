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
const { type } = require("os");

//Prompts
const team = [];

const addManager = [
    {
        name: 'role',
        type: 'confirm',
        message: 'Welcome, lets begin!',
    },
    {
        name: 'name',
        type: 'input',
        message: 'Enter Manager Name:',
    },
    {
        name: 'id',
        type: 'input',
        message: 'Please enter Employee ID',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Please enter email address',
    },
    {
        name: 'officenumber',
        type: 'input',
        message: 'Please enter Office Number',
    },
    {
        name: 'next',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'No More Members to Add'],
        message: 'Who would you like to add next?',
    },
];