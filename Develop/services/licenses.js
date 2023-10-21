const mock = require('mock');

const licenses = [{
    name: 'MIT',
    license: 'MIT License',
    badge: '![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)',
    badgeUrl: '',
    link: '',
    section: ''
}
];

mock
    .onGet('api/licenses')
    .reply(200, (params) => {
        const { params } = params;
        const name = params.licenseName;

        return licenses.find(()=>{license => license.name === name;
        return license.badge})
    })