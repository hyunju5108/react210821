const path = require('path')
// commonJS = es5  (module.exports가 es5의 방식)
// => node에서 기본적으로 채택한 모듈 방식
// esm (Ecma script module) = es6

// 브라우저에서 동작 X => Node 환경에서 돌아가는 코드.   .eslintrc > env.node "true"로 한게 그 이유,

// entry : 코드의 시작점.
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'), // 앞 뒤 경로 합쳐주는 함수, __dirname:webpack congig가 있는 폴더의 경로 | ./src/ 이렇게만 적으면 똑똑하게 index.js를 찾아감.
  output: {
    path: path.resolve(__dirname, 'dist'), // 어디다 빌드된 결과물을 저장할지.
    filename: 'bundle.js',
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
  plugins: [],
}
