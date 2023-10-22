//import the axios library for api calls
const axios = require('axios');
//import the mock api adapter that was creaetd.  Needed to force calls to the
//mock adapter opposed to sending over the web.
const mock = require('./mock');

//base api client initialization with default attributes.
const apiClient = axios.create({
    baseURL: 'api'
});

//api calls below are abstracted here to allow for easier modification to api call logic.
//used to follow DRY as the call is only written once, and can be called with 


//function set as asynchronous to allow for response time in api calls.
//the license name to return a license object
async function fetchLicense(licenseName){
    //set endpoint to be appended to baseURL
    let endpoint = '/license';
    
    //pass the endpoint and licenseName paramater.  returns license object that 
    //containes the name paramater that was passed in the call
    return await apiClient.get(endpoint, { params: { name: licenseName } })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            //log any errors to the consoleß
            console.error('Error:', error);
        });
}

async function fetchQuestions(){
    //set endpoint to be appended to baseURL
    let endpoint = '/questions';

    return await apiClient.get(endpoint)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error', error);
        }); 
}

//used to export the fetchLicense and fetchQuesstions functions
module.exports = { 
    fetchLicense,
    fetchQuestions
};