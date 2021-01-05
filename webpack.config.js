var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: path.resolve(__dirname, './static/js/index.ts'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['source-map-loader'],
        enforce: 'pre'
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.ts']
  },
  output: {
    path: path.resolve(__dirname, './static/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './static/dist')
  },
  watchOptions: {
    ignored: /node_modules/
  }
};
