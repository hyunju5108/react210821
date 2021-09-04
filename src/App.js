import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import TodoPage from './pages/todo'
import ErrorPage from './pages/Error'
import ResetStyles from './components/ResetStyles'

const ROUTES = {
  TODO: '/',
  SIGNUP: '/signup',
}
/*
 * 컴포넌트들의 최상위 컴포넌트
 */

function App() {
  return (
    <>
      <ResetStyles />
      <BrowserRouter>
        {/* 안바꼈으면 좋겠는 부분은 switch밖에다가 쓰면 됨. switch는 계속 바뀌는 영역 */}
        <Switch>
          {/* /나 /todo로 들어왔을때 todo페이지로 이동 */}
          <Route exact path={ROUTES.TODO}>
            <TodoPage />
          </Route>
          {/* 그 외에 정의되지 않은 페이지는 error page */}
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
