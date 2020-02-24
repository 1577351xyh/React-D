import React, { PureComponent } from 'react'
import style from '../index.module.css'
import { connect } from 'react-redux'

export class List extends PureComponent {

  render() {
    const { TopicList } = this.props;
    return (
      <div>
        {
          TopicList.map((item) => {
            return (
              <div className={style.flex} key={item.get('id')}>
                <img src={item.get('imgUrl')} alt="" />
                <div>{item.get('title')}</div>
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
    TopicList: state.get('home').get('TopicList')
  }
}
export default connect(mapStateToProps, null)(List)
