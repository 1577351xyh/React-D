import React, { Component } from 'react'
import { connect } from 'react-redux'
import { acitonCreate } from './store'
export class Detail extends Component {

  componentDidMount() {
    ///当前id
    // console.log(this.props.match.params.id)
    this.props.getTopicList(this.props.match.params.id)
  }

  render() {
    console.log(this.props.title)
    return (
      <div>
        <p>{this.props.title}{this.props.match.params.id}</p>
        <div dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
      </div>
    )
  }
}

const mapStateProps = (state) => {
  return {
    title: state.get('detail').get('title'),
    content: state.get('detail').get('content')
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    getTopicList(id) {
      dispatch(acitonCreate.getInfo(id))
    },
  }
}
export default connect(mapStateProps, mapDispathToProps)(Detail)
