/**
 * User: Lior Elrom
 * Date: 3/10/16
 * Time: 8:03 PM
 */

'use strict';

import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import graphQLHTTP from 'express-graphql';

import App from './src/components/App';
import schema from './data/schema';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send(ReactDOMServer.renderToString(<App />));
});

app.use('/GraphQL', graphQLHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log('GraphiQL Server is listening at http://localhost:%s/graphql', PORT);
});
