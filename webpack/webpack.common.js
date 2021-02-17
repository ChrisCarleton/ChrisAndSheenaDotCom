/* eslint no-process-env: 0 */

require('dotenv').config();

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

module.exports = {
  entry: {
    corejs: 'core-js/stable',
    regenerator: 'regenerator-runtime/runtime',
    main: path.resolve(__dirname, '../src/index.js'),
  },
  module: {
    rules: [
      // Vue.js files
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },

      // Javascript
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },

      // Stylesheets
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
      },
      {
        test: /\.scss$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],
      },

      // Images
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
          },
        },
      },
    ],
  },
  resolve: {
    modules: [ 'node_modules', 'src' ],
    extensions: [ '.js', '.vue', '.html' ],
    symlinks: false,
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/assets/favicon.ico',
    }),
    new webpack.ids.HashedModuleIdsPlugin(),
    new CompressionWebpackPlugin({
      filename: '[path][base].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|vue|css|s[ac]ss|png|jpe?g|gif|svg)$/i,
    }),
    new webpack.DefinePlugin({
      'process.env.BT_ADMIN_EMAIL': JSON.stringify(process.env.BT_ADMIN_EMAIL),
      'process.env.BT_DATE_FORMAT': JSON.stringify(process.env.BT_DATE_FORMAT),
      'process.env.BT_LONG_DATE_FORMAT': JSON.stringify(process.env.BT_LONG_DATE_FORMAT),
      'process.env.BT_ALLOW_PERSONAL_INFORMATION': JSON.stringify(process.env.BT_ALLOW_PERSONAL_INFORMATION),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        default: false,
        vendors: false,

        vendor: {
          test: /\/node_modules\//,
          priority: 20,
        },

        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'async',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },
};
