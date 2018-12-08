const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/dist/',
    filename: 'js/ app.js',
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env','react']
              }
            }
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          },
          {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // 将 JS 字符串生成为 style 节点
            }, {
                loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
            }, {
                loader: "sass-loader" // 将 Sass 编译成 CSS
            }]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name: 'resource/[name].[ext]'
                }
              }
            ]
          },
          //font
          {
            test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name: 'resource/[name].[ext]'
                }
              }
            ]
          }
          
    ]
},
  plugins: [
  //处理HTMl文件
    new HtmlWebpackPlugin({
      template: './src/index.html'
  }),
  //独立CSS文件
  new ExtractTextPlugin("css/[name].css"),
    // 提出公共模块
  new webpack.optimize.CommonsChunkPlugin({
    name:'common',
    filename:'js/base.js'
  }),

],
devServer: {
    port:8086
   },


};