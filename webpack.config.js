/* Node Modules */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* Local Directories */
const DIST_DIR = path.resolve(__dirname, 'dist');

const config = {
  entry: './app/index.js',
  output: {
    path: DIST_DIR,
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ]
  },
  context: __dirname,
  resolve: {
    modules: [ 'node_modules' ],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};

// Below are additional configurations for production

if (process.env.NODE_ENV !== 'production') {
  config.mode = 'development';
  config.devtool = 'inline-source-map';
  config.devServer = { historyApiFallback: true };
}

module.exports = config;
