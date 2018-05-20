//@ flow

import * as t from './actionTypes'
import type { State } from './model'

export const initialState: State = {
  user: null,
  errorMsg: null,
  isLoading: false,
}

export default (state: State = initialState, action: any): State => {
  switch (action.type) {
    case t.LOG_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMsg: null,
      }
    case t.LOG_IN_SUCCESS:
      return {
        ...state,
        user: {
          name: action.payload.email,
        },
        errorMsg: null,
      }
    case t.LOG_OUT:
      return {
        ...state,
        user: null,
        errorMsg: null,
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
