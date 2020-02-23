import React from 'react'
//组件要以大写字母开头
import { Provider } from 'react-redux'
import Header from './common/header/index'
import store from './store/store'


export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  )
}
