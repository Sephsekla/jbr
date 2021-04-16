const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
//const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
//const WebpackShellPlugin = require('webpack-shell-plugin');
const TerserPlugin = require("terser-webpack-plugin");



 module.exports = merge(common, {
   mode: 'production',
 /*  plugins: [
    new WebpackShellPlugin({

    })
  ], */
     optimization: {
      minimize: true,
        minimizer: [
         /* new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: false // set to true if you want JS source maps
          }), */
          new OptimizeCSSAssetsPlugin({}),
          new TerserPlugin({
            test: /\.js(\?.*)?$/i,
            extractComments: true,
          })
        ]
      },
 });