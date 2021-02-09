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
const team = [];

//Manager
const addManager = [
    {
        name: 'role',
        type: 'confirm',
        message: 'Welcome, lets begin!',
    },
    {
        name: 'name',
        type: 'input',
        message: 'Please enter Manager Name:',
    },
    {
        name: 'id',
        type: 'input',
        message: 'Please enter Manager Employee ID',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Please enter Manager Email Address',
    },
    {
        name: 'officenumber',
        type: 'input',
        message: 'Please enter Manager Office Number',
    },
    {
        name: 'next',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'No More Members to Add'],
        message: 'Who would you like to add next?',
    },
];

//Engineer
const addEngineer = [
    {
        name: 'name',
        type: 'input',
        message: 'Please enter Engineer Name',
    },
    {
        name: 'id',
        type: 'input',
        message: 'Please enter Engineer id number',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Please enter Engineer email',
    },
    {
        name: 'github',
        type: 'input',
        message: 'Please enter Engineer GitHub username',
    },
    {
        name: 'next',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'No More Members to Add'],
        message: 'Who would you like to add next?',
    },
];

//Intern
const addIntern = [
    {
        name: 'name',
        type: 'input',
        message: 'Please enter Intern Name',
    },
    {
        name: 'id',
        type: 'input',
        message: 'Please enter Intern id number',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Please enter Intern email',
    },
    {
        name: 'school',
        type: 'input',
        message: 'Which College or University is the intern currently enrolld in?',
    },
    {
        name: 'next',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'No More Members to Add'],
        message: 'Who would you like to add next?',
    },
];

//Application
ask (addManager)

function ask(questionArr) {
    inquirer
        .prompt(questionArr)
        .then((member) => {
            team.push(member);

            if (member.next === 'Add Intern') {
                ask(addEngineer);
            } else if (member.next === 'Add Intern') {
                ask(addIntern);
            } else {
                createProfile(team);
            }
        })
        .catch((err) => console.log(err));
}

function createProfile(team) {
    const profile = team.map((member) => {
        const { name, id, email } = member;

        if (member.hasownproperty('officenumber')) {
            const { officenumber } = member;
            return new Manager(name, id, email, officenumber);
        }

        if (member.hasownproperty('github')) {
            const { github } = member;
            return new Engineer(name, id, email, github);
        }

        if (member.hasownproperty('school')) {
            const { school } = member;
            return new Intern(name, id, email, school);
        }
    });

    generateHTML(profile);
}