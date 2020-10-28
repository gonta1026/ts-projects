const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/food-app/main.ts',//読み込ませるファイルのパス
  output: {
    filename: 'bundle.js',//[contenthash]bundle.jsともできる
    path: path.resolve(__dirname, 'dist'),/* 絶対パスで書くこと */
    publicPath: '/dist/' /* /dist/に返すようにする */
  },
  devtool: 'inline-source-map',/* ソースマップの出力 */
  module: { /* moduleはどういうファイルをどのように扱うのかを設定できる。 */
    rules: [{
      test: /\.ts$/,　/* 何に対して=>tsファイルに対して */
      use: 'ts-loader',　/* ts-loaderを使う （typescriptのチェッカーの役割を担っている。）*/
      exclude: /node_modules/　/* 慣習的にかく */
    }]
  },
  resolve: {
    extensions: ['.ts', '.js'] /* 拡張がなかったらつけてあげる設定 */
  }
}
