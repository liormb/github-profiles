/**
 * User: Lior Elrom
 * Date: 3/9/16
 * Time: 8:18 PM
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Tokens from './models/Tokens';

// components
import App from './components/App';

// styles
require('../public/scss/bootstrap.css');
require('../public/scss/main.scss');

const clientId = Tokens.TOKEN_CLIENT_ID;
const clientSecret = Tokens.TOKEN_CLIENT_SECRET;

ReactDOM.render(
    <App clientId={clientId} clientSecret={clientSecret} />,
    document.getElementById('page')
);
