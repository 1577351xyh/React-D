import { fromJS } from 'immutable'
import * as actionType from './const'
//immutable让数据不可被修改,避免不小心修改state中的值
const defaultState = fromJS({
  TopicList: [],
  articleList: [],
  recommendList: []
})

const homeData = (state, action) => {
  return state.merge({
    TopicList: fromJS(action.data.topicList),
    articleList: fromJS(action.data.articleList),
    recommendList: fromJS(action.data.recommendList)
  })
}
//接收初始值和状态
const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    //immutable的set方法会把之前的值和设置的值,返回一个全新的对象
    case actionType.HOME_TOPIC:
      return homeData(state, action)
    case actionType.HOME_MORE:
      return state.merge({
        articleList: state.get('articleList').concat(action.data),
      })
    default:
      return state
  }
}
export default homeReducer