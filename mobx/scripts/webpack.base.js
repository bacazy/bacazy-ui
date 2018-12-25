
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ROOT = path.resolve(__dirname, '..');


module.exports = {
    entry: {
        index: [path.resolve(ROOT, "src/index.js")]
    },

    output: {
        filename: '[name]_[hash:8].js',
        chunkFilename: '[id]_[hash:8].js',
        path: path.resolve(ROOT, 'dist')
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

    module: {
        rules: [
            {
                test: /\.jsx?/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ["@babel/preset-env","@babel/preset-react"],
                            plugins: [
                                ["@babel/plugin-proposal-decorators", {
                                    legacy: true
                                }],
                                "babel-plugin-add-module-exports",
                                "@babel/plugin-syntax-dynamic-import",
                                ['import', {
                                    libraryName: 'antd', libraryDirectory: 'es', style: 'css' 
                                }],
                                "@babel/plugin-proposal-class-properties"
                            ]
                        }
                    }
                ]
            },

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: path.resolve(ROOT, 'src/index.html'),
            filename: 'index.html',
            inject: true
        }),

        new CopyWebpackPlugin([
            {
                from: path.resolve(ROOT, 'src/assets'),
                to: 'assets'
            }
        ])
    ]
}