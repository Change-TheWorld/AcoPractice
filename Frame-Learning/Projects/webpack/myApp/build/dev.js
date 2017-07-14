let webpack = require('webpack');
let merge = require('webpack-merge');
let baseConfig = require('./base');

let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
  devtool: '#eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: '',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      favicon: './favicon.ico',
      hash: true,
      cache: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});
