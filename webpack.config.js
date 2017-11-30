const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

const PROD = (process.env.NODE_ENV === 'production')

module.exports = () => ({
  entry: './src/views/index.js',
  output: {
    filename: './src/public/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
              plugins: ['transform-object-rest-spread'],
            },
          },
        ],
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
        ],
      },
    ],
  },
  plugins:
    PROD
      ? [ new webpack.optimize.UglifyJsPlugin() ]
      : [ new WebpackNotifierPlugin() ]
  ,
});
