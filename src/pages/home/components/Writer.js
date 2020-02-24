import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export class Writer extends PureComponent {
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
