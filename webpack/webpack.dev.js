/* eslint no-process-env: 0 */

const { merge } = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist/dev'),
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    index: 'index.html',
    port: 8081,
    proxy: {
      '/api': process.env.BT_API_URL || 'http://localhost:29201/',
    },
    publicPath: '/',
    watchContentBase: true,
  },
});
