// @flow
import * as t from './actionTypes'
import type { State } from './model'

export const initialState: State = {
  data: null,
  isLoading: false,
  errorMsg: null,
}

export default (state: State = initialState, action: any): State => {
  switch (action.type) {
    case t.NEWS_GET_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMsg: null,
      }
    case t.NEWS_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case t.NEWS_GET_FAILURE:
      return {
        ...state,
        errorMsg: action.payload.errorMsg,
      }
    default:
      return state
  }
}
