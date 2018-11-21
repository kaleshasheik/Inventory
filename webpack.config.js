const webpack = require('webpack'); 
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production'

var config = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    externals: {
        jquery: 'jQuery'
    },
    performance: {
        hints: 'warning'
    },
    module: {
        rules: [
            { test: /\.(ts|tsx)$/, use: 'ts-loader' },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader'
                ],
              }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({template: './index.html'}),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
          })
    ],
     optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
      },
  };
  
  module.exports = (env, argv) => {
  
    if (argv.mode === 'development') {
      config.devtool = 'source-map';
    }
  
    if (argv.mode === 'production') {
      //...
    }
  
    return config;
  };