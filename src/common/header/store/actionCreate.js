import * as actionType from './const'
import axios from 'axios'
import { fromJS } from 'immutable'


const searchGetList = (data) => ({
  type: actionType.SEARCH_LIST,
  data: fromJS(data),
  totalPage: data.length / 10
})

export const searchList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      dispatch(searchGetList(res.data.data))
      console.log('axios执行了')
    })
  }
}

export const onMouseEnter = () => ({
  type: actionType.MOUSE_ENTER
})
export const onMouseLeave = () => ({
  type: actionType.MOUSE_LEAVE
})

export const searchFocis = () => ({
  type: actionType.SEARCH_FOCUS
})
export const searchblur = () => ({
  type: actionType.SEARCH_BLUR
})