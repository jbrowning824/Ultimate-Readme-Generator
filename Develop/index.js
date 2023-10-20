// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
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
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License',
                    'BSD 2-Clause \""Simplified\"" License', 
                    'BSD 3-Clause \""New\"" or \""Revised\"" License', 'Boost Software License 1.0',
                    'Creative Commons Zero v1.0', 'Eclipse Publice License 2.0', 
                    'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1',
                    'Mozilla Public License 2.0', 'The Unlicense'],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
