const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/client/App.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', ".tsx", ".ts"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      filename: './index.html',
    }),
    // new CopyPlugin({
    //   patterns: [{ from: './src/client/style.css' }],
    // }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './src/client'),
    },
    proxy: {
      '/api': 'http://localhost:3333',
      secure: false
    }
  },

}