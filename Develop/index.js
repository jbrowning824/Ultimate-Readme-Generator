// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");

const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
// this was done in develop/services/models/questions
// my thought here was to abstract this out to a separate file
// to make future modifications to this app more extensible

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
async function init() {
    //passed to the api-service to return list of questions for inquirer prompt
    // const questions = await apiClient.fetchQuestions();
    



  

    // fetch(baseURL, httpOptions)
    // .then((response) => {
    //   if (!response.ok) {
    //     throw new Error(`Request failed with status: ${response.status}`);
    //   }
    //   return response.json();
    // })
    // .then((licenses) => {
    //     console.log(licenses);
      
  
    //   console.log('Commonly used licenses:', licenses);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });

    
    generateMarkdown({name: 'mit'})

    // TODO: Possible create a service to pass questions to inquirer 
    // would be helpful if there is ever multiple question sets that are needed
    // would also allow for greater extensibility to the application
    
    // inquirer.prompt(questions)
    // .then((answers) => {
    //     console.log(answers);
    // });
}

// Function call to initialize app
init();
