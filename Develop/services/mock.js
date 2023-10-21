axios = require('axios');
MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

export default mock;