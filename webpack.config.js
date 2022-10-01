const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    popup: './src/popup.jsx',
    eventPage: './src/components/background/eventPage.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [{ 
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/popup.html',
        filename: 'popup.html'
    }),
    new CopyPlugin({
        patterns: [
        { from: "public",},
        ],
    }),
 ]
};