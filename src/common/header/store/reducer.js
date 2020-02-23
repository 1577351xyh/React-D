import * as actionType from './const'
import { fromJS } from 'immutable'


//immutable让数据不可被修改,避免不小心修改state中的值
const defaultState = fromJS({
  focused: false,
  list: [],
  mouse: false,
  page: 1,
  totalPage: 1
})

//接收初始值和状态
const haederReducer = (state = defaultState, action) => {
  switch (action.type) {
    //immutable的set方法会把之前的值和设置的值,返回一个全新的对象
    case actionType.SEARCH_FOCUS:
      return state.set('focused', true)

    case actionType.SEARCH_BLUR:
      return state.set('focused', false)

    case actionType.SEARCH_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    // return state.set('list', action.data).set('totalPage', action.totalPage)
    case actionType.MOUSE_LEAVE:
      console.log('MOUSE_LEAVE执行了')
      return state.set('mouse', false)

    case actionType.MOUSE_ENTER:
      return state.set('mouse', true)

    case actionType.PAGE_CHANGE:
      return state.set('page', action.page)

    default:
      return state

  }
}
export default haederReducer