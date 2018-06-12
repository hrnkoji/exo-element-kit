const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const exoElementConfig = require('./exo-element.config');

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
    filename: exoElementConfig.name + '.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules', 'src']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
    ]
  }, 
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "lodash": "_",
    "styled-components": "styled"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: exoElementConfig.name,
      template: path.resolve(__dirname, 'src', 'index.ejs'),
      tagName: exoElementConfig.name,
      attributes: exoElementConfig.attributes
    })
  ]
};
