/**
 * User: Lior Elrom
 * Date: 3/13/16
 * Time: 10:09 AM
 */

'use strict';

import path from 'path';
import express from 'express';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import graphQLHTTP from 'express-graphql';
import config from './webpack.config';
import schema from './data/schema';
import App from './src/components/App';

const GRAPHQL_PORT = 8080;
const APP_PORT = 3000;

// Expose a GraphQL endpoint
const graphQLServer = express();
graphQLServer.use('/', graphQLHTTP({
    graphiql: true,
    pretty: true,
    schema
}));
graphQLServer.listen(GRAPHQL_PORT, () =>
    console.log(`GraphQL server is running on http://localhost:${GRAPHQL_PORT}`)
);

// Serve the Relay app
const compiler = webpack(config);
const app = new WebpackDevServer(compiler, {
    contentBase: '/public/',
    publicPath: '/public/assets/',
    proxy: {
        '/graphql': `http://localhost:${GRAPHQL_PORT}`
    },
    inline: true,
    stats: { colors: true }
});

// Serve static resources
app.use('/', express.static(path.resolve(__dirname, 'public/')));
app.listen(APP_PORT, () => {
    console.log(`App server is running on http://localhost:${APP_PORT}`);
});
