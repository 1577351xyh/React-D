import * as actionType from './const'
import axios from 'axios'
import { fromJS } from 'immutable'



const getTopicList = (data) => ({
  type: actionType.HOME_TOPIC,
  data:data
})

const getMoreList = (data) => ({
  type: actionType.HOME_MORE,
  data:fromJS(data)
})


export const searchList = () => {
  return async (dispatch) => {
    let res = await axios.get('/api/home.json')
    dispatch(getTopicList(res.data.data))
  }
}

export const getMore = () => {
  return async (dispatch) => {
    let res = await axios.get('/api/homeList.json')
    dispatch(getMoreList(res.data.data))
    
  }
}