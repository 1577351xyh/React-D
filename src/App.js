import React from 'react'
//组件要以大写字母开头
import Jstext from './components/jsText'
import Clock from './components/Clock'
import Change from './components/Change'
import ReduxText from './components/ReduxTest'

export default function App() {
  return (
    <div>
      <Jstext />
      <Clock />
      <Change />
      <ReduxText />
    </div>
  )
}
