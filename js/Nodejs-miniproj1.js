const inquirer = require('inquirer');
const figlet = require('figlet');
const chalk = require('chalk');

// ask user some questions
const questions = [
    {type: 'input', name: 'name', message: 'What is your name?'},
];
inquirer
    .prompt(questions)
    .then (function (answers) {
        figlet (answers.name, function(err,data) {
            if (err) {
                console.log('Something went wrong ...');
                console.dir(err);
                return;
            }
            console.log(chalk.blue(data));
        })
    })