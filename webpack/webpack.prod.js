const { merge } = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].min.js',
    path: path.resolve(__dirname, '../dist/prod'),
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});
