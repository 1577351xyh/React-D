import React, { Component } from 'react'

import style from '../index.module.css'


export class List extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div>
        <div className={style.flex}>
          <img src="//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="" />
          <div>社会热点</div>
        </div>
      </div>
    )
  }
}


export default List
