import { checkResponse } from '../helpers/session'
import { httpGet } from '../helpers/network'

export const PROFILE_GET_REQUEST = 'PROFILE_GET_REQUEST'
export const PROFILE_GET_SUCCESS = 'PROFILE_GET_SUCCESS'
export const PROFILE_GET_FAILURE = 'PROFILE_GET_FAILURE'

export function getProfile(id) {
  return dispatch => {
    dispatch({
      type: PROFILE_GET_REQUEST,
    })

    httpGet(`user-info/${id}`)
      .then(res => {
        if (checkResponse(res)) {
          dispatch({
            type: PROFILE_GET_SUCCESS,
            payload: res.data,
          })
        } else {
          dispatch({
            type: PROFILE_GET_FAILURE,
            payload: {
              errorMsg: res.message,
            },
            error: true,
          })
        }
      })
      .catch(error => {
        dispatch({
          type: PROFILE_GET_FAILURE,
          payload: {
            errorMsg: 'Сервер временно недоступен',
          },
          error: true,
        })
      })
  }
}
