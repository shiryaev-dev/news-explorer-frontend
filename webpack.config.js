const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    main: './src/pages/main-loading-and-no-results/index.js',
    savednews: './src/pages/saved-news/index.js',
    mainresultsnotloggedin: './src/pages/main-results-not-logged-in/index.js',
    mainresultsloggedin: './src/pages/main-results-logged-in/index.js'

  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/[name].[chunkhash].js'
  },
  module: {
    rules: [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
    },
    {
        test: /\.css$/,
        use:  [
          isDev ? 'style-loader' : { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../' } }, 'css-loader', 'postcss-loader',
        ]
    },
    {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]'
    },
    {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [
            'file-loader?name=./images/[name].[ext]',
            {
                loader: 'image-webpack-loader',
                options: {

                }
            }
        ]
    },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: '[name]/[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/main-loading-and-no-results/index.html',
      filename: './index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/saved-news/index.html',
      filename: './savednews/index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/main-results-not-logged-in/index.html',
      filename: './mainresultsnotloggedin/index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/main-results-logged-in/index.html',
      filename: './mainresultsloggedin/index.html'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
              preset: ['default'],
      },
      canPrint: true
    }),
    new WebpackMd5Hash(),

  ]
};