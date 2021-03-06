const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// commonJS = es5  (module.exports가 es5의 방식)
// => node에서 기본적으로 채택한 모듈 방식
// esm (Ecma script module) = es6

// 브라우저에서 동작 X => Node 환경에서 돌아가는 코드.   .eslintrc > env.node "true"로 한게 그 이유,

// entry : 코드의 시작점.
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'), // 앞 뒤 경로 합쳐주는 함수, __dirname:webpack congig가 있는 폴더의 경로 | ./src/ 이렇게만 적으면 똑똑하게 index.js를 찾아감.
  output: {
    path: path.resolve(__dirname, 'dist'), // 어디다 빌드된 결과물을 저장할지.
    filename: 'bundle.[hash].js',
    publicPath: '/', //외부에 있는것들이 어떻게 폴더를 기준으로 경로를 잡을지.  devServer.contentBase랑 같음
  },
  module: {
    // 어떤 파일을 가져와서 어떻게 변화시킬지
    // js로 된 것들을 babel로 읽어.
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'], //import 시, 파일확장자 생략 가능
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'), // 어떤 html을 기준으로 빌드할건지
      filename: 'index.html', //빌드된 html 파일이름
    }),
  ],
  devServer: {
    open: true, //자동으로 브라우저를 열어줌
    historyApiFallback: true,
  },
}
