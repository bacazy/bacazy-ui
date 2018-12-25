
const webpack = require('webpack');

const exclude_modules = [
    'antd'
]

function getModules(packages) {
    let _packs = {};
    Object.keys(packages).forEach(function (key) {
        if(exclude_modules.filter(e => e === key).length === 0){
            _packs[key] = key;
        }
    });
    return _packs;
}

const packages = require('./../package.json').dependencies;

module.exports = {
    mode: 'production',

    entry: {
        ...getModules(packages)
    },

    optimization: {
        minimize: true,

        splitChunks: {
            chunks: "all",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },

        runtimeChunk: {
            name: entrypoint => `${entrypoint.name}_runtime`
        }
    },

    plugins: [
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 200000 // Minimum number of characters
        })
    ]
}