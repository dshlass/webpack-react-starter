const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)?$/,
        exclude: [/images/],
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'fonts/',
              name: '[name][hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(svg)$/,
        exclude: [
          /fonts/,
        ] /* dont want svg fonts from fonts folder to be included */,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true, // true outputs JSX tags
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Advanced React with Webpack Setup',
      template: './src/index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
};
