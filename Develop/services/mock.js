//data used for mock api responses
const licenses = require('./models/licenses');
const questions = require('./models/questions');

//import axios library 
const axios = require('axios');
//import mock adapter to create the mock api
const MockAdapter = require('axios-mock-adapter');

//create the mock adapter. 
const mock = new MockAdapter(axios);

//used to create a new mock endpoint adapter and set the method endpoint and response logic
mock
    //used to emulate a call to the license end point.  When axios makes
    //a call with the mock adapter referenced it will execute the function below
    .onGet('api/license')
    .reply(licenseName => {
        //store paramaters passed through api call
        const { params } = licenseName;
        const name = params.name;

        //find license object in the license array that matches the license name that was
        //passed in the name paramater of the api call.
        license = licenses.find(license => license.name === name);
        //return an OK status code as well as the license object serialized as JSON
        return [200,JSON.stringify(license)];
    });

//used to create a new mock endpoint adapter and set the method endpoint and response logic
mock
    //used to emulate a call to the license end point.  When axios makes
    //a call with the mock adapter referenced it will execute the function below
    .onGet('api/questions')
    .reply(() => { 

        //return an OK status code as well as the questions object
        return[200, questions]
    });
    
//export the mock api adapter
module.exports = mock;