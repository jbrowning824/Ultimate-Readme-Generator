const licenses = require('./licenses');
const axios = require('axios');
const mock = require('../mock');


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief discription of what your project does.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should people use your project'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to your project?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How do others test your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license',
        choices: licenses.map(l => l.license),
        default: 'None',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

module.exports = questions;