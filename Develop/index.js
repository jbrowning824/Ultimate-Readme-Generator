// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const axios = require('axios');
const mock = require('../Develop/services/mock');

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
async function init() {
    
    var questions = await axios.get('api/questions')
        .then((response) => {
            return response.data;
        }); 
  


        inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
        });
        

    license = await axios.get('/api/license', { params: { name: 'GNU' } })
        .then((response) => {
            //console.log('GET /api/license', response.data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Function call to initialize app
init();
