import React, { Component } from 'react'
import style from './style.module.css'
import logo from '../../statics/logo1.png'
import Icon from '../icon/index'
export class Header extends Component {
  render() {
    return (
      <div className={style.header}>

        <a href="/">
          <img src={logo} alt="" className={style.logo} />
        </a>

        <div className={style.nav}>
          <div className={style.left}>首页</div>
          <div className={style.left}>下载App</div>
          <div className={style.left}>
            <input type="text" />
            <Icon name="ren"/>
          </div>
          <div className={style.right}>Aa</div>
          <div className={style.right}>...</div>
          <div className={style.right}>登录</div>
          <div className={style.right}>注册</div>
        </div>

        <div className={style.wenzhang}>写文章</div>
      </div>
    )
  }
}


export default Header
