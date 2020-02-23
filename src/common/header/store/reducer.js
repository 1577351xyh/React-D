const defaultState = {
  focused: false
}

//接收初始值和状态
export const haederReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'focus':
      return {focused:true} 
    case 'blur':
      return {focused:false} 
    default:
      return state
  }
}