const path = require('path');

module.exports = {
  mode: 'none',
  entry: './lib/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: '',
    libraryTarget: 'commonjs-module',
  },
};
