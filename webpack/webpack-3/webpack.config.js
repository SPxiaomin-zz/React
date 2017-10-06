const path = require('path');

module.exports = {
  entry: {
    bundle1: path.resolve(__dirname, './src/entry1.js'),
    bundle2: path.resolve(__dirname, './src/entry2.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
};
