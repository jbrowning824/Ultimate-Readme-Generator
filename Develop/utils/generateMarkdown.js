const apiClient = require('./services/api-service');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
async function renderLicenseBadge(license) {
  let result = await apiClient.fetchLicense(license);  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
async function renderLicenseLink(license) {
  let result = await apiClient.fetchLicense(license);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
async function renderLicenseSection(license) {
  let result = await apiClient.fetchLicense(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({name}) {
  let badge = renderLicenseBadge(name);
  let link = renderLicenseLink(name);

  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
