
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const buildBase = require('./webpack.build.base');

const config = merge(buildBase, {
    plugins: [        
        new BundleAnalyzerPlugin()
    ]
});

module.exports = config;