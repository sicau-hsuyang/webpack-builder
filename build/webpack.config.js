const { type } = require('os');
const path = require('path');
const loader = require('sass-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const arguments = process.argv.splice(2);
const libname = (arguments[5] || "").split("=")[1];
if(!libname) {
  throw new Error("Bundle libname config is required");
}

function assetsPath(_path) {
  const assetsSubDirectory = "assets";
  return path.posix.join(assetsSubDirectory, _path)                
}


module.exports = {
  mode: 'production',
  // 程序的运行路径 不是当前文件相对于入口文件的路径
  entry: `./src/${libname}/index.ts`, //入口文件,从项目根目录指定
  target: 'web',
  output: {
    // 需要打包的文件
    library: libname,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, `../dist/${libname}`),
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".tsx",".js", ".jsx", ".vue"]
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
        use: [process.env.NODE_ENV !== 'production'
        ? 'vue-style-loader'
        : {
            loader: MiniCssExtractPlugin.loader,
          }, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: [process.env.NODE_ENV !== 'production'
        ? 'vue-style-loader'
        : {
          loader: MiniCssExtractPlugin.loader,
        },'postcss-loader', 'css-loader']
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: assetsPath("img/[name].[hash:7].[ext]")
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/index.css',
    }),
    new VueLoaderPlugin()
  ]
};
