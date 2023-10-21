const axios = require('axios');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
async function renderLicenseBadge(license) {
  

  return result.badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
async function renderLicenseLink(license) {
  let result = axios.get('api/license', { params: { name: license} })
    .then((response) => {
      
    })
    .catch((error) => {
      console.error('Error', error);
    });
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown({name}) {
  let badge = renderLicenseBadge(name);
  let link = renderLicenseLink(name);

  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
