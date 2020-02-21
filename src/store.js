import {createStore} from 'redux'

//接收初始值和状态
const counterReducer = (state = 0, action) => {
  console.log(action)
  const num = action.palyLo || 1;
    switch (action.type) {
      case 'add':
        return state + num
      case 'minus':
        return state - num
      default:
        return state
} }
const store = createStore(counterReducer)
export default store