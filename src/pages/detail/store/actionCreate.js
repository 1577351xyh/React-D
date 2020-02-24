import * as actionType from './const'
import axios from 'axios'
import { fromJS } from 'immutable'



const getdetailInfo = (data) => ({
  type: actionType.HOME_INFO,
  data:data
})

export const getInfo = (id) => {
  return async (dispatch) => {
    let res = await axios.get(`/api/detail.json?id=${id}`)
    console.log(res)
    dispatch(getdetailInfo(res.data.data))
  }
}

