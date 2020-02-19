//rcc
import React, { Component } from 'react'
import logo from '../logo.svg'
// import './index.css'
import style from '../index.module.css'
// React类负责逻辑控制,比如修改数据-> vdom(虚拟dom)
// ReactDom 类负责渲染,vdom - dom  React.createElement



// 1.及继承componet
// 2.render方法
export default class jsText extends Component {
  render() {
    const users = { name: 'ssss' }
    function name(user) {
      return user.name
    }

    let arr = [1, 2, 3].map(item => <li key={item}>{item}</li>);
    return (
      <div>
        {name(users)}
        <ul>
          {arr}
        </ul>
        <img src={logo} alt="" style={{ width: '200px' }} className={style.img} />
      </div>
    );
  }
}
