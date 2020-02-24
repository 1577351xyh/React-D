import React, { Component } from 'react'
import style from './style.module.css'
import logo from '../../statics/logo1.png'
import Icon from '../icon/index'
import { connect } from 'react-redux'
import { acitonCreate } from './store/'

export class Header extends Component {

  lists = () => {
    const { focused, list, page, mouse, totalPage, onMouseEnter, onMouseLeave, pageChange } = this.props;
    const newList = list.toJS()
    const pageList = []

    if (newList.length !== 0) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <div className={style.listItem} key={newList[i]}>{newList[i]}</div>
        )
      }
    }
    if (focused || mouse) {
      return (
        <div
          className={style.list}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >

          <div className={style.flex}>
            <span>热门搜索</span>
            <span onClick={() => pageChange(page, totalPage)}>换一换</span>
          </div>

          {pageList}
        </div>
      )
    } else {
      return null
    }
  }

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
            <input type="text"
              onFocus={()=>this.props.handFocus(this.props.list)}
              onBlur={this.props.handBlur}
              className={this.props.focused ? style.active : ''}
            />
            <Icon name="ren" />
            {this.lists()}
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

const mapStateToProps = (state) => {
  return {
    //把redux中的focused 印射到组件的focused
    focused: state.get('header').get('focused'),
    list: state.get('header').get('list'),
    mouse: state.get('header').get('mouse'),
    page: state.get('header').get('page'),
    totalPage: state.get('header').get('totalPage')
    // focused: state.getIn(['header','focused'])
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handFocus(list) {
      console.log(list)
      if (list.size === 0) {
        dispatch(acitonCreate.searchList())
      }
      dispatch(acitonCreate.searchFocis())
    },
    handBlur() {
      dispatch(acitonCreate.searchblur())
    },
    onMouseEnter() {
      dispatch(acitonCreate.onMouseEnter())
    },
    onMouseLeave() {
      dispatch(acitonCreate.onMouseLeave())
    },
    pageChange(page, totalPage) {
      if (page < totalPage) {
        dispatch(acitonCreate.pageChanges(page + 1))
      } else {
        dispatch(acitonCreate.pageChanges(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)
