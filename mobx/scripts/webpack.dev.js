const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const apiMocker = require('mocker-api');

function listJsFiles(dir){
    let list = fs.readdirSync(dir);
    let files = [];
    list.forEach(function (item) {
        if(/\.js$/.test(item) && fs.statSync(path.resolve(dir, item)).isFile()){
            files.push(path.resolve(dir, item));
        }
    })
    return files;
}

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        port: 8181,
        hot: true,
        compress: true,
        historyApiFallback: true,
        inline: true,
        clientLogLevel: "error",
        open: true,
        before(app){
            apiMocker(app, listJsFiles('mock'), {
                changeHost: true
            })
        }
    },

    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 1000,
        poll: 1000
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}