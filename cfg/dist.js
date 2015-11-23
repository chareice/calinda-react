var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
var fs = require('fs');

var baseConfig = require('./base');
baseConfig.output.filename = '[hash]app.js';

var config = _.merge({
  entry: path.join(__dirname, '../src/components/run'),
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    function() {
      this.plugin("done", function(stats) {
        var hash = stats.hash;
        var filename = path.join(__dirname, '../dist/', 'index.html');
        fs.readFile(filename, 'utf8', function (err,data) {
          if (err) {
            return console.log(err);
          }
          var result = data.replace(/var hash = ""/g, 'var hash = "'+ hash +'"');

          fs.writeFile(filename, result, 'utf8', function (err) {
             if (err) return console.log(err);
          });
        });
      });
    }
  ]
}, baseConfig);

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: path.join(__dirname, '/../src')
});

module.exports = config;
