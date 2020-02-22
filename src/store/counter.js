

//理解为Vue - action
export const add = (num) => ({ type: 'add', palyLo: num })
export const minus = () => ({ type: 'minus' })
 //异步返回的是函数
export const asyncAdd = () => dispatch => {
  //异步调用
  setTimeout(() => {
    dispatch({ type: 'add' })
  }, 1000)
}

//接收初始值和状态
export const counterReducer = (state = 0, action) => {
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