import React, { Component } from 'react'

export default class Clock extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    //初始化
    super(props)
    //使用state属性维护状态,构造函数中初始化
    this.state = { date: new Date() }
  }

  componentDidMount() {
    //api的调用通常在这个构造函数中使用
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000)
  }

  componentWillUnmount() {
    //组件卸载的钩子函数
    clearInterval(this.timerId)
  }

  render() {
  return <div>{this.state.date.toLocaleTimeString()}</div>
  }

}
