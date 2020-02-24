import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutable'
/**
 * createStore 构造函数
 * applyMiddleware 支持异步
 * combineReducers 模块化
 */

// import logger from "redux-logger";
import thunk from "redux-thunk";

import { haederReducer } from '../common/header/store/'
import { homeReducer } from '../pages/home/store'

const store = createStore(
  //模块化导入
  combineReducers({
    header: haederReducer,
    home: homeReducer
  }),
  applyMiddleware(thunk)
)
export default store