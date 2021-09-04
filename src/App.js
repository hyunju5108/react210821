import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import TodoPage from './pages/todo'
import ErrorPage from './pages/Error'

const ROUTES = {
  TODO: '/',
  SIGNUP: '/signup',
}
/*
 * 컴포넌트들의 최상위 컴포넌트
 */

function App() {
  return (
    <BrowserRouter>
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
  )
}

export default App
