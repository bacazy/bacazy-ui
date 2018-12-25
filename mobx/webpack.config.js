

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const base = require('./scripts/webpack.base');

function getEnvConfig(){
    let config = {};
    const env = process.env.BRANCH || 'default';
    console.log("env", env);
    switch (env) {
        case 'dev':
            config = require('./scripts/webpack.dev');
            break;
        case 'analyzer':
            config = require('./scripts/webpack.build.analyzer');
            break;
        case 'prod':
            config = require('./scripts/webpack.build.prod');
            break;
        default:
            config = require('./scripts/webpack.dev');
            break;
    }
    return config;
}

module.exports = merge(base, getEnvConfig());