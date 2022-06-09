
const fs = require('fs');
const path = require('path');
const { prompt } = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your project?'
    },
    {
        type: 'input',
        name: 'authors',
        message: 'Who are the authors of your project? (Please separate authors by comma)'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'What is the email of the leader of this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license of your project?',
        choices: ["MIT", "Apache 2.0", "BSD 3.0", "none"]
    },
    {
        type: 'input',
        name: 'report',
        message: 'How does one report issues?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How does one make contributions?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    }
];


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, "/example/", fileName), data)
}


function init() {
    prompt(questions).then(answers => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown((answers)));
    })
}


init();
