import React, { Component } from 'react'

//Hook Api
import { useState, useEffect } from "react";

// export default class Clock extends React.Component {
//   // eslint-disable-next-line no-useless-constructor
//   constructor(props) {
//     //初始化
//     super(props)
//     //使用state属性维护状态,构造函数中初始化
//     this.state = { date: new Date() }
//   }

//   componentDidMount() {
//     //api的调用通常在这个构造函数中使用
//     this.timerId = setInterval(() => {
//       this.setState({
//         date: new Date()
//       });
//     }, 1000)
//   }

//   componentWillUnmount() {
//     //组件卸载的钩子函数
//     clearInterval(this.timerId)
//   }
//   render() {
//   return <div>{this.state.date.toLocaleTimeString()}</div>
//   }
// }

function Clock() {
  const [date, setDate] = useState(new Date())
  // useEffect编写异步操作代码(副作用代码)
  //参数2传递空数组,使我们的函数就执行一次
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date())
    })
    //返回清理函数,组件销毁的时候会被清理
    return () => { clearInterval(timerId) }
  }, [setDate])

  return <div>{date.toLocaleTimeString()}</div>
}

export default Clock