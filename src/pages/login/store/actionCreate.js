import * as actionType from './const'
import axios from 'axios'
import { fromJS } from 'immutable'



const getToken = (data) => ({
  type: actionType.LOGIN_TOKEN,
  data:data
})



export const login = () => {
  return async (dispatch) => {
    let res = await axios.get('/api/login.json')
    window.localStorage.setItem('token',res.data.data)
    dispatch(getToken(res.data.data))
  }
}
