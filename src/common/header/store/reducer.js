import * as actionType from './const'
const defaultState = {
  focused: false
}
//接收初始值和状态
const haederReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.SEARCH_FOCUS:
      return { focused: true }
    case actionType.SEARCH_BLUR:
      return { focused: false }
    default:
      return state
  }
}
export default haederReducer