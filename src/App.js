import React from 'react'
//组件要以大写字母开头
import { Provider } from 'react-redux'
import Header from './common/header/index'
// import store from './store/store'
import { BrowserRouter, Route } from 'react-router-dom'


export default function App() {
  return (
    <div>
      <Header />
      {/* 路由 */}
      <BrowserRouter>
        <div>
          <Route exact path="/" render={() => <div>首页</div>}></Route>
          <Route exact path="/detail" render={() => <div>详情页</div>}></Route>
        </div>
      </BrowserRouter>
    </div>
  )
}
