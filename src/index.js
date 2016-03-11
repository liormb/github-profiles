/**
 * User: Lior Elrom
 * Date: 3/9/16
 * Time: 8:18 PM
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
let Tokens;

try {
    Tokens = require('./models/Tokens');
}
catch(e) {
    console.warn(`In order not to hit the GitHub limit rate, replace clientId and clientSecret in src/index.js with your credentials.\n\rSee: https://github.com/settings/developers`);
    Tokens = {
        clientId: '',
        clientSecret: ''
    };
}

const clientId = Tokens.TOKEN_CLIENT_ID;
const clientSecret = Tokens.TOKEN_CLIENT_SECRET;

ReactDOM.render(
    <App clientId={clientId} clientSecret={clientSecret} />,
    document.getElementById('page')
);
