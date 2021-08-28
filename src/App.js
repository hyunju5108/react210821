import React, { useState } from 'react'

// useXXX => hoox, functional
function App() {
  const [boxStyle, setBoxStyle] = useState({
    width: 100,
    height: 100,
    backgroundColor: '#efefef',
  }) // 배열을 return

  // state 를 다루는 함수는 앞에 handle이라는 이름을 붙인다.
  // 버튼이 눌렸을때 박스 사이즈를 키운다.
  // boxstyle의 넓이값, 높이값으 *2를 한다.
  // boxStyle의 값이 변한다 -> 컴포넌트가 다시 그려진다.
  const handleIncrementBoxSize = () => {
    setBoxStyle({
      ...boxStyle, // backgroundColor는 유지. ...은 구조분해할당
      width: boxStyle.width * 2,
      height: boxStyle.height * 2,
    })
  }

  const { width, height, backgroundColor } = boxStyle

  return (
    <div
      style={{
        width: width,
        height: height,
        background: backgroundColor,
      }}
    >
      <div>Box</div>
      <button onClick={handleIncrementBoxSize}>+</button>
    </div>
  )
}

// export {App} 이렇게 객체로 내보냄 => 여러개를 내보낼때 용이
// export default  함수 자체를 내보냄.=>하나만 내보낼때 용이
export default App
