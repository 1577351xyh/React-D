import React, { Component } from "react";
// import store from "../store";
import { connect } from 'react-redux'
import { add, minus, asyncAdd } from '../store/counter'

//当成装饰起去用
// connect
//1.自动渲染
//2.印射到组件
@connect(state => ({ num: state }),
  {
    add, asyncAdd, minus
  })
class ReduxTest extends Component {
  render() {
    return (<div>
      <p>{this.props.num}</p>
      <div>
        <button onClick={() => this.props.add(2)}>+</button>
        <button onClick={() => this.props.minus()}>-</button>
        <button onClick={() => this.props.asyncAdd()}>-</button>
      </div>
    </div>
    );
  }
}


export default ReduxTest