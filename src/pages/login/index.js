import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { acitonCreate } from './store'
import { Redirect } from 'react-router-dom';


export class Login extends PureComponent {

  componentDidMount(){
    this.tokens = window.localStorage.getItem('token')
    //派发一个事件,修改redux中的token
  }
  
  render() {
    const { token } = this.props;
    if (token) {
      return (
        <Redirect to='/' />
      )
    } else {
      return (
        <div>
          <input type="text" placeholder="账号" ref={(input) => { this.account = input }} />
          <input type="password" placeholder="密码" ref={(input) => { this.password = input }} />
          <button onClick={() => this.props.login(this.account, this.password)}>登录</button>
        </div>
      )
    }

  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    //把redux中的focused 印射到组件的focused
    token: state.get('login').get('token'),
  }
}

const mapDispatchToProps = (dispatch) => ({
  login(account, password) {
    console.log()
    dispatch(acitonCreate.login(account.value, password.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
