import React, { Component } from 'react'
import '../../statics/font';


export class Span extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref={`#icon-${this.props.name}`}></use>
        </svg>
      </div>
    )
  }
}


export default Span;
