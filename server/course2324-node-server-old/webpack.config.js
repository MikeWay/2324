const path = require('path');
const webpack = require('webpack');

var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

const config = {
    devtool: 'source-map',
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [path.join(__dirname, 'src')],
            loader: 'babel-loader',
            options: {
                presets: ['es2017']
            }
        }]
    },
    externals: nodeModules,
    target: 'node',
    plugins: [
        new webpack.BannerPlugin({banner: '#!/usr/bin/env node', raw: true})
    ]
};

module.exports = config;