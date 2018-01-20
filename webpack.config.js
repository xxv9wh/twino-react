var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
   extensions: ['', '.scss', '.css', '.js', '.json'],
   modulesDirectories: [
     'node_modules',
     path.resolve(__dirname, './node_modules')
   ],
   packageMains: ['browser', 'web', 'browserify', 'main', 'style'],
  },
};

module.exports = config;
