
'use strict';

var path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname,
        filename: 'build/js/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' }
        ]
    },
    resolve: {
        root: path.join(__dirname, 'src'),
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules', 'src']
    }
};
