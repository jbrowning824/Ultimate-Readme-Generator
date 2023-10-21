const axios = require('axios');
const mock = require('./mock');

const apiClient = axios.create({
    baseURL: 'api'
});

async function fetchLicense(licenseName){
    let endpoint = '/license';
    
    return await apiClient.get(endpoint, { params: { name: licenseName } })
        .then((response) => {
            return response.data;
        //console.log('GET /api/license', response.data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

async function fetchQuestions(){
    let endpoint = '/questions';

    return await apiClient.get(endpoint)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error', error);
        }); 
}

module.exports = {fetchLicense,fetchQuestions};


