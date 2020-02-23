import { createStore, applyMiddleware, combineReducers } from 'redux'

/**
 * createStore 构造函数
 * applyMiddleware 支持异步
 * combineReducers 模块化
 */

import logger from "redux-logger";
import thunk from "redux-thunk";

import {haederReducer} from '../common/header/store/'

const store = createStore(
  //模块化导入
  combineReducers({ 
    header: haederReducer 
  }),
  applyMiddleware(logger, thunk)
)
export default store