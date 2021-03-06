'use strict';

let path = require('path');
let webpack = require('webpack');
let _ = require('lodash');

let baseConfig = require('./base');
// Add needed plugins here
let CopyWebpackPlugin = require('copy-webpack-plugin');

let config = _.merge({
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  cache: true,
  devtool: 'eval-source-maps',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([{from: 'src/locales', to: 'locales'}], {})
  ]
}, baseConfig);

// Add needed loaders
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'react-hot!babel-loader',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
