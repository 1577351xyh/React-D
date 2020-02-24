import React, { Component } from 'react'
import List from './components/List'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import style from './index.module.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { acitonCreate } from './store'

export class Home extends Component {

  componentDidMount() {
    this.props.getTopicList()
  }
  render() {
    return (
      < div className={style.homeWarrper} >
        <div className={style.left}>
          <Topic />
          <List />
          <Recommend />
        </div>
        <div className={style.right}>
          <Writer />
        </div>
      </div >
    )
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    getTopicList(action) {
      dispatch(acitonCreate.searchList())
    },
  }
}
export default connect(null, mapDispathToProps)(Home)
