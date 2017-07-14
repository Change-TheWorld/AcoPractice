let path = require('path');
let webpack = require('webpack');

let CopyWebpackPlugin = require('copy-webpack-plugin');

let baseConfig = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=es2015',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: path.resolve(__dirname, '../src'),
        from: '**/*.html',
        to: path.resolve(__dirname, '../dist')
      }
    ])
  ]
};

module.exports = baseConfig;
