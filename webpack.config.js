const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const exoElementConfig = require('./exo-element.config');

module.exports = {
  entry: './src/main.ts',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules', 'src']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: exoElementConfig.name,
    template: path.resolve(__dirname, 'src', 'index.ejs'),
    tagName: exoElementConfig.name,
    attributes: exoElementConfig.attributes
  })]
};
