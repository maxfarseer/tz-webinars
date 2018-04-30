import { API_ROOT } from '../constants/Defaults'
import { checkResponse } from '../helpers/session'
import { postData } from '../helpers/network'

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export function logIn(params, cb) {
  return dispatch => {
    postData(`${API_ROOT}/validate`, params)
      .then(res => {
        if (checkResponse(res)) {
          dispatch({
            type: LOG_IN,
            payload: {
              email: params.email,
            },
          })
          cb()
        } else {
          dispatch({
            type: LOG_IN_FAILURE,
            payload: {
              errorMsg: res.message,
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
