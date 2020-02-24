import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Recommend extends Component {
  render() {
    return (
      <div>
        Recommend
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps)(Recommend)
