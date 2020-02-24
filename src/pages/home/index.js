import React, { Component } from 'react'
import List from './components/List'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import style from './index.module.css'
import axios from 'axios'
import { connect } from 'react-redux'
export class Home extends Component {


  componentDidMount = async () => {
    let res = await axios.get('/api/home.json')
    const action = {
      type: 'HOME_TOPIC',
      data: res.data.data
    }
    this.props.getTopicList(action)
  };

  render() {
    return (
      < div className={style.homeWarrper} >
        <div className={style.left}>
          <Topic />
          <List />
        </div>
        <div className={style.right}>
          <Recommend />
          <Writer />
        </div>
      </div >
    )
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    getTopicList(action) {
      dispatch(action)
    },
  }
}
export default connect(null, mapDispathToProps)(Home)
