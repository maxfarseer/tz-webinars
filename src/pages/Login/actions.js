// @flow

import { API_ROOT } from '../../constants/Defaults'
import { checkResponse } from '../../helpers/session'
import { postData } from '../../helpers/network'
import * as t from './actionTypes'

type CbType = () => void
type Params = {|
  +email: string,
  +password: string,
|}

// TODO: make acync AC flow typed
export function logIn(params: Params, cb: CbType): Function {
  return (dispatch: any) => {
    postData(`${API_ROOT}/validate`, params)
      .then(res => {
        if (checkResponse(res)) {
          dispatch({
            type: t.LOG_IN,
            payload: {
              email: params.email,
            },
          })
          cb()
        } else {
          dispatch({
            type: t.LOG_IN_FAILURE,
            payload: {
              errorMsg: res.message,
            },
            error: true,
          })
        }
      })
      .catch(error => {
        dispatch({
          type: t.LOG_IN_FAILURE,
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
    type: t.LOG_OUT,
  }
}
