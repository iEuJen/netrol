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
    filename: 'index.html',
    template: path.resolve(__dirname, 'index.html'),
  }))
  // 如果不是 production 環境, 則添加 清空dist目錄 的 插件
  !production && plugins.push(new CleanWebpackPlugin())
  return plugins
}

module.exports = {
  mode: "production",
  entry: "./src",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: production ? 'netrol.min.js' : 'netrol.js',
    library: "netrol",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["babel-loader", "ts-loader"],
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
    extensions: [".ts", ".js"]
  },
  devtool: 'inline-source-map',
  plugins: getPlugins()
};