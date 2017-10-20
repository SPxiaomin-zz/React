const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './app/main.js'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  // devtool: 'eval-source-map',
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './app/index.tmpl.html'),
    }),
  ]
};
