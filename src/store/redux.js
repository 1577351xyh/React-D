//用户传来的是一个函数
export default function createStore(reducer) {

  
  //当前这个值
  let currentState = undefined;
  const currentListeners = [] //回调函数数组

  function getState() {
    return currentState;
  }
  //更新状态
  function dispatch(action) {
    //修改
    currentState = reducer(currentState, action)
    //变更通知,调用所有的回调函数
    currentListeners.forEach(v => v())
    return currentState
  }

  function subscribe(cb) {
    currentListeners.push(cb)
  }

  //初始化
  dispatch({type:'xxxxxxsxssssss'})

  //对外暴露
  return {
    getState, dispatch, subscribe
  }
}