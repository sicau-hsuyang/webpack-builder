const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  mode: 'production',
  // 程序的运行路径 不是当前文件相对于入口文件的路径
  entry: './index.js', //入口文件,从项目根目录指定
  target: 'web',
  output: {
    // 需要打包的文件
    library: 'PaginationTable',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, '../dist'),
    filename: 'pagination-table.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin()
  ]
};
