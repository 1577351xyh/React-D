import { fromJS } from 'immutable'
import * as actionType from './const'
//immutable让数据不可被修改,避免不小心修改state中的值
const defaultState = fromJS({
  token: ''
})

//接收初始值和状态
const Reducer = (state = defaultState, action) => {
  switch (action.type) {
    //immutable的set方法会把之前的值和设置的值,返回一个全新的对象
    case actionType.LOGIN_TOKEN:
      return state.set('token',action.data)
    default:
      return state
  }
}
export default Reducer