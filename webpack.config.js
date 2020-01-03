/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/app.js',
    },
    resolve: {
    //配置别名，在项目中可缩减引用路径
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    module: {
        rules: [{
            test: /\.jsx|js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    plugins: [
                        // 引入样式为 css
                        // style为true 则默认引入less
                        ['import', {
                            libraryName: 'antd',
                            style: 'css'
                        }],
                        ['transform-runtime', {
                            'polyfill': false,
                            'regenerator': true
                        }],
                    ],
                    presets: ['env', 'react', 'stage-0']
                }
            }
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        },
        {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader' // 将 JS 字符串生成为 style 节点
            }, {
                loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
            }, {
                loader: 'sass-loader' // 将 Sass 编译成 CSS
            }]
        },
        //less
        {
            test: /\.less$/,
            use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'less-loader'
            ]
        },
        // {
        //     test: /\.less$/,
        //     exclude: [/node_modules/],
        //     use: [
        //         require.resolve('style-loader'),
        //         {
        //             loader: require.resolve('css-loader'),
        //             options: {
        //                 modules: true,
        //                 localIndetName: '[name]__[local]___[hash:base64:5]'
        //             },
        //         },
        //         {
        //             loader: require.resolve('less-loader'), // compiles Less to CSS
        //         },
        //     ],
        // },
        // {
        //     test: /\.css$/,
        //     use:{
        //         loader:'postcss-loader'
        //     }
        // },
        {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'resource/[name].[ext]'
                }
            }]
        },
        //font
        {
            test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'resource/[name].[ext]'
                }
            }]
        },
        {
            test:/\.html$/,
            use: ['html-loader', {
                loader: 'html-minify-loader',
                options: {
                    comments: true
                }
            }]
        }
        // {
        //     test: /\.jsx|js$/,
        //     loader: 'eslint-loader',
        //     enforce: 'pre',
        //     include: [path.resolve(__dirname, 'src')], // 指定检查的目录
        //     options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
        //         formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
        //     }
        // },
        ]
    },
    resolveLoader: {
        // 因为 html-loader 是开源 npm 包，所以这里要添加 'node_modules' 目录
        modules: [path.join(__dirname, './src/loaders'), 'node_modules']
    },
    plugins: [
    //处理HTMl文件q4rq?、
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        //独立CSS文件
        new ExtractTextPlugin('css/[name].css'),
        // 提出公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        }),
    ],
    devServer: {
        port: 8086,
        historyApiFallback: true,
        open: true
    }
};
