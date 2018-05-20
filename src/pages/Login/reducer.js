//@ flow

import * as t from './actionTypes'
import type { State } from './model'

const initialState: State = {
  user: null,
  errorMsg: '',
}

export default (state: State = initialState, action: any): State => {
  switch (action.type) {
    case t.LOG_IN:
      return {
        ...state,
        user: {
          name: action.payload.email,
        },
        errorMsg: '',
      }
    case t.LOG_OUT:
      return {
        ...state,
        user: null,
        errorMsg: '',
      }
    case t.LOG_IN_FAILURE:
      return {
        ...state,
        errorMsg: action.payload.errorMsg,
      }
    default:
      return state
  }
}
