
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
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            "~" : path.resolve(ROOT, "src")
        }
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
                                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                                ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                                "babel-plugin-add-module-exports",
                                "@babel/plugin-syntax-dynamic-import",
                                ['import', {
                                    libraryName: 'antd', libraryDirectory: 'es', style: 'css' 
                                }]
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
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: {
                                "primary-color": "#22aa22",                         // 全局主色
                                "link-color": "#22aa22",                            // 链接色
                                "success-color": "#52c41a",                         // 成功色
                                "warning-color": "#faad14",                         // 警告色
                                "error-color": "#f5222d",                           // 错误色
                                "font-size-base": "14px",                           // 主字号
                                "heading-color": "rgba(0, 0, 0, .85)",              // 标题色
                                "text-color": "rgba(0, 0, 0, .65)",                 // 主文本色
                                "text-color-secondary ": "rgba(0, 0, 0, .45)",      // 次文本色
                                "disabled-color ": "rgba(0, 0, 0, .25)",            // 失效色
                                "border-radius-base": "4px",                        // 组件/浮层圆角
                                "border-color-base": "#d9d9d9",                     // 边框色
                                "box-shadow-base": "0 2px 8px rgba(0, 0, 0, .15)",  // 浮层阴影
                            },
                            javascriptEnabled: true,
                        },                        
                    }
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