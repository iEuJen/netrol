const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const { version } = require('./package.json')

// 判斷開發環境
const production = process.env.NODE_ENV === 'production' || false

// 版本信息
const banner = `netrol.js v${version}
© 2020-~ EuZen Chen
Released under the Anti 996 License`

// 插件
function getPlugins () {
  // 插件掛載
  let plugins = [
    new webpack.BannerPlugin({ banner })
  ]
  // 开发环境, 加载 index.html 目录
  !production && plugins.push(new HtmlWebpackPlugin({
    filename: "index.html",
    template: path.resolve(__dirname, "index.html"),
  }))
  // 如果不是 production 環境, 則添加 清空dist目錄 的 插件
  !production && plugins.push(new CleanWebpackPlugin())
  return plugins
}

// 入口文件, 开发环境执行 debug 目录下的代码, 生产版本直接打包 src 目录下的代码
const entry = production ? "./src" : "./debug/index.js"

module.exports = {
  mode: "production",
  entry: entry,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: production ? 'netrol.min.js' : 'netrol.js',
    library: "netrol",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        use: ["babel-loader", "ts-loader", "eslint-loader"],
        exclude: [ path.resolve(__dirname, "node_modules") ]
      }
    ]
  },
  performance: {
    hints:false   
  },
  optimization: {
    minimize: production,
    minimizer: [
      new UglifyJSPlugin()
    ]
  },
  devServer: {
    port: 80,
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
    extensions: [".ts", ".js"]
  },
  devtool: 'inline-source-map',
  plugins: getPlugins()
};