const licenses = require('./licenses');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');


const mock = new MockAdapter(axios);

mock
    .onGet('api/license')
    .reply(licenseName => {
        const { params } = licenseName;
        const name = params.name;

        license = licenses.find(license => license.name === name);
        return [200,JSON.stringify(license)];
        
    }
    );

module.exports = mock;