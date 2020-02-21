import React, { Component } from "react";
// import store from "../store";
import { connect } from 'react-redux'

//当成装饰起去用
@connect(state => ({ num: state }), {
    add:(num)=>({type:'add',palyLo:num}),
    minus:()=>({type:'minus'}),
})
class ReduxTest extends Component {
  // componentDidMount(){
  //   //订阅状态的变化
  //   store.subscribe(()=>{ 
  //     //更新
  //     this.forceUpdate();
  //   })
  // }


  render() {
    return (<div>
      {/* <p>{store.getState()}</p> */}
      <p>{this.props.num}</p>
      <div>
        <button onClick={() => this.props.add(2)}>+</button>
        <button onClick={() => this.props.minus()}>-</button>
      </div>
    </div>
    );
  }
}


export default ReduxTest