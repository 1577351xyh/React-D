import React from 'react'
//组件要以大写字母开头
import { Provider } from 'react-redux'
import Header from './common/header/index'
// import store from './store/store'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'

export default function App() {
  return (
    <div>
      {/* 路由 */}
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/detail/:id" component={Detail}></Route>
        </div>
      </BrowserRouter>
    </div>
  )
}
