import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Writer extends Component {
  render() {
    return (
      <div>
        Writer
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps)(Writer)
