// TODO: Include packages needed for this application
const licenses = require('./services/models/licenses');
const inquirer = require("inquirer");
const questionsClient = require('./services/api-service')
// TODO: Create an array of questions for user input
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
async function init() {
    
    console.log(licenses.map(l => l.license));

    let questions = await questionsClient.fetchQuestions();
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
    });
}

// Function call to initialize app
init();
