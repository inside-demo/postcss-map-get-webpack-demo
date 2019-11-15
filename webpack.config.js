const path = require('path');
module.exports = {
  mode: 'development',
  target: 'web',
  devtool: "source-map",
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ],
      }
    ]
  }
}