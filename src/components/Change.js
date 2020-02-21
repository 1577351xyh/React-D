import React, { Component } from 'react'


export default class Clock extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    //初始化
    super(props)
    //使用state属性维护状态,构造函数中初始化
    this.state = { name: '' }
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    }, () => {
      console.log(this.state.name)

    })
  }

  render() {
    return <div><input type="text" value={this.state.name} onChange={this.handleChange} /></div>
  }
}