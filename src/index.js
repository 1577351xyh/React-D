import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

//跨平台,把操作编程虚拟dom
// jsx可以理解为是虚拟dom
ReactDom.render(<App/>, document.getElementById('root'))