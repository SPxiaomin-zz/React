const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const configObj = {
  entry: path.resolve(__dirname, './app/main.js'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './app/index.tmpl.html'),
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  configObj.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production',
      }
    })
  );
  configObj.devtool = 'none';
  configObj.output.filename = 'bundle.min.js';
}

module.exports = configObj
