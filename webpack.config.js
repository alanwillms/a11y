var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: {
    app: __dirname + '/src/main.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'dist/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'dist/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [__dirname + '/src']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new FaviconsWebpackPlugin(__dirname + '/src/images/favicon.png'),
    new HtmlWebpackPlugin({template: __dirname + '/index.html'}),
    new ExtractTextPlugin('styles.[contenthash].css'),
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeCssAssetsPlugin(),
    new webpack.ProvidePlugin({
      jquery: 'jQuery',
      '$': 'jQuery'
    })
  ]
};
