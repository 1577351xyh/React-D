import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import store from './store/store'
import { Provider } from 'react-redux'


//跨平台,把操作编程虚拟dom
// jsx可以理解为是虚拟dom
ReactDom.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))