const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const { getIp } = require('./src/utils')
const IP = getIp() || '127.0.0.1'
const PORT = '3000'

module.exports = (env, args) => {
  const isProductionMode = args.mode === 'production'
  return {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    devServer: {
      contentBase: './dist',
      host: IP,
      port: PORT
    },
    devtool: 'inline-source-map',
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        title: '单页面spa',
        template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new CleanWebpackPlugin()
    ],
    module: {
      rules: [{
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader", // 将 JS 字符串生成为 style 节点
            "css-loader", // 将 CSS 转化成 CommonJS 模块
            "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
          ]
        },
        {
          test: /\.css$/,
          use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          }, 'css-loader']
        },
        {
          test: /\.(svg)$/,
          use: [{
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: `[path][name]${isProductionMode ? '.[hash:8]' : ''}.[ext]`
            }
          }]
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: `assets/images/[name]${isProductionMode ? '.[hash:8]' : ''}.[ext]`
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }

      ]
    }
  }
}
