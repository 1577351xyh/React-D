import { createStore, applyMiddleware } from 'redux'

/**
 * createStore 构造函数
 * applyMiddleware 支持异步
 * combineReducers 模块化
 */

import logger from "redux-logger";
import thunk from "redux-thunk";
import { counterReducer } from './counter'

const store = createStore(
  // combineReducers({ counter: counterReducer }),
  counterReducer,
  applyMiddleware(logger, thunk)
)
export default store