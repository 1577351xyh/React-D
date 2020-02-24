import { fromJS } from 'immutable'
import * as actionType from './const'
//immutable让数据不可被修改,避免不小心修改state中的值
const defaultState = fromJS({
  title:'',
  content:''
})


//接收初始值和状态
const homeReducer = (state = defaultState, action) => {
  console.log(action.data)
  switch (action.type) {
    //immutable的set方法会把之前的值和设置的值,返回一个全新的对象
    case actionType.HOME_INFO:
      return state.merge({
        title: action.data.title,
        content: action.data.content
      })
    default:
      return state
  }
}
export default homeReducer