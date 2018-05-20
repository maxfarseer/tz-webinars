// @flow

import { API_ROOT } from '../../constants/Defaults'
import { checkResponse } from '../../helpers/session'
import { postData } from '../../helpers/network'
import { defaultErrorMsg } from '../../constants/Defaults'
import * as t from './actionTypes'

type CbType = () => void
type Params = {|
  +email: string,
  +password: string,
|}

export const loginRequest = () => ({
  type: t.LOG_IN_REQUEST,
})

export const loginSuccess = (email: string) => ({
  type: t.LOG_IN_SUCCESS,
  payload: {
    email,
  },
})

export const loginFailure = (errorMsg: string = defaultErrorMsg): any => ({
  type: t.LOG_IN_FAILURE,
  payload: {
    errorMsg,
  },
  error: true,
})

// TODO: make acync AC flow typed
export function logIn(params: Params, cb: CbType): Function {
  return (dispatch: any) => {
    dispatch(loginRequest())
    return postData(`${API_ROOT}/validate`, params)
      .then(res => {
        if (checkResponse(res)) {
          //TODO: smth from response
          dispatch(loginSuccess(params.email))
          cb()
        } else {
          dispatch(loginFailure(res.message))
        }
      })
      .catch(error => {
        dispatch(loginFailure())
      })
  }
}

export function logOut() {
  return {
    type: t.LOG_OUT,
  }
}
