import { API_ROOT } from '../constants/Defaults'
import { checkResponse } from '../helpers/session'
import { postData } from '../helpers/network'

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export function logIn(params, cb) {
  return dispatch => {
    postData(`${API_ROOT}/validate`, params)
      .then(data => {
        if (checkResponse(data)) {
          dispatch({
            type: LOG_IN,
            payload: {
              name: params.username,
            },
          })
          cb()
        } else {
          dispatch({
            type: LOG_IN_FAILURE,
            payload: {
              errorMsg: data.message,
            },
            error: true,
          })
        }
      })
      .catch(error => {
        dispatch({
          type: LOG_IN_FAILURE,
          payload: {
            errorMsg: 'Сервер временно недоступен',
          },
          error: true,
        })
      })
  }
}

export function logOut() {
  return {
    type: LOG_OUT,
  }
}
