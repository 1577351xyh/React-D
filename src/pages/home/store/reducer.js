import { fromJS } from 'immutable'

//immutable让数据不可被修改,避免不小心修改state中的值
const defaultState = fromJS({
  TopicList: [],
  articleList: [],
  recommendList: []
})
//接收初始值和状态
const homeReducer = (state = defaultState, action) => {
  console.log(action.type)
  switch (action.type) {
    //immutable的set方法会把之前的值和设置的值,返回一个全新的对象
    case 'HOME_TOPIC':
      return state.merge({
        TopicList: fromJS(action.data.topicList),
        articleList: fromJS(action.data.articleList),
        recommendList: fromJS(action.data.recommendList)
      })
    default:
      return state
  }
}
export default homeReducer