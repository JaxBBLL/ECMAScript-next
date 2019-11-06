const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = function(env) {
  const isDev = env === "development";
  const config = {
    mode: isDev ? "development" : "production",
    entry: {
      index: "./src/index.js"
    },
    output: {
      path: resolve("dist"),
      filename: "[name].js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader"
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html"
      })
    ].concat(
      isDev
        ? [new webpack.HotModuleReplacementPlugin()]
        : [new CleanWebpackPlugin()]
    ),
    devtool: isDev ? "cheap-module-eval-source-map" : "cheap-module-source-map",
    devServer: {
      contentBase: "dist",
      open: true,
      port: 4200,
      hot: true
      // hotOnly: true
    },
    optimization: {
      minimize: false // 关闭压缩
    }
  };
  return config;
};
