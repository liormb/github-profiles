
'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve('src'),
    entry: [
        './app'
    ],
    output: {
        path: path.resolve(__dirname, 'public/'),
        publicPath: '/public/assets/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: 'public'
    },
    devtool: 'inline-source-map',
    debug: true,
    module: {
        loaders: [
            { test: /\.(gif|png|jpe?g|svg|woff|woff2|eot|ttf)$/i, exclude: /node_modules/, loader: 'url?limit=10000' },
            { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css!autoprefixer') },
            { test: /\.scss$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass') },
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] }

        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components')
        },
        root: path.join(__dirname, 'src'),
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules', 'src']
    }
};
