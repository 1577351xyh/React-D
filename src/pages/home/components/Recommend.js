

import React, { Component } from 'react'
import style from '../index.module.css'
import { connect } from 'react-redux'

export class Recommend extends Component {

  render() {
    const { articleList } = this.props;
    return (
      <div>
        {
          articleList.map((item) => { 
            return (
              <div  key={item.get('id')}>
                <img src={item.get('imgUrl')} alt="" />
                <div>{item.get('title')}</div>
                <div>{item.get('desc')}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.get('home').get('articleList')
  }
}
export default connect(mapStateToProps, null)(Recommend)
