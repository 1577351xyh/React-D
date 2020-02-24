

import React, { PureComponent } from 'react'
import style from '../index.module.css'
import { connect } from 'react-redux'
import {acitonCreate} from '../store'

export class Recommend extends PureComponent {

  render() {
    const { articleList } = this.props;
    return (
      <div>
        {
          articleList.map((item) => {
            return (
              <div className={style.flex} key={item.get('id')}>
                <img src={item.get('imgUrl')} alt="" />
                <div>
                  <div>{item.get('title')}</div>
                  <div>{item.get('desc')}</div>
                </div>
              </div>
            )
          })
        }
        <div onClick={()=>{this.props.getMoreList()}}>加载更多</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.get('home').get('articleList')
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    getMoreList(action) {
      dispatch(acitonCreate.getMore())
    },
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Recommend)
