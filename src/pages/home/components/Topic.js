import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Topic extends Component {
  render() {
    return (
      <div>
        <img className={styleMedia.img} src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps)(Topic)
