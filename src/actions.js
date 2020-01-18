import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  CHANGE_NAME,
  CHANGE_USERNAME,
  CHANGE_EMAIL,
  ADD_ROBOT,
  UPDATE_ROBOT,
  DELETE_ROBOT,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants'


export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })
export const setName = (text) =>({type:CHANGE_NAME,payload:text})
export const setUserName = (text) =>({type:CHANGE_USERNAME,payload:text})
export const setEmail = (text) =>({type:CHANGE_EMAIL,payload:text})
export const addRobot = (obj) =>({type:ADD_ROBOT,payload:obj})
export const updateRobot = () =>({type:UPDATE_ROBOT,payload:''})
export const deleteRobot = () =>({type:DELETE_ROBOT,payload:''})



export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING })
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}