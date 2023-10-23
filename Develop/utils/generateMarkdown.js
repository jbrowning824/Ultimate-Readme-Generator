const mockApiClient = require('../services/mock-api-service');
const ApiClient = require('../services/api-service');
const mock = require('../services/mock');

//set variables
const httpOptions ={
  headers: {
      Authorization: 'Bearer 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',
      'X-GitHub-Api-Version': '2022-11-28',
  }
}
const baseURL = 'https://api.github.com/licenses';

function isNotLicensed(name){
  return name === 'none' ? true : false;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
async function renderLicenseBadge(license) {
  const badge = await apiClient.fetchLicense(license);
  
  return isNotLicensed(license) ? '' : badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
async function renderLicenseLink(license) {
  let result = await mockApiClient.fetchLicense(license);
  console.log(result);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
async function renderLicenseSection(license) {
 
  mock.restore();
  const apiClient = new ApiClient(baseURL, httpOptions);
  
  apiClient.fetchRequestedLicense(license)
  try {
    const licenses = await apiClient.fetchRequestedLicense(license);
    console.log('Licenses:', licenses);
  } catch (error) {
    console.error('Error:', error);
  }
}

// TODO: Create a function to generate markdown for README
async function generateMarkdown({name}) {
  
  renderLicenseLink(name);
  renderLicenseSection(name);


//   return `# ${data.title}

// `;
}

module.exports = generateMarkdown;