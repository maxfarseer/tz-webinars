import { LOG_IN, LOG_OUT, LOG_IN_FAILURE } from '../actions/SessionActions'

const initialState = {
  user: null,
  errorMsg: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: {
          name: action.payload.email,
        },
        errorMsg: '',
      }
    case LOG_OUT:
      return {
        ...state,
        user: null,
        errorMsg: '',
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
        errorMsg: action.payload.errorMsg,
      }
    default:
      return state
  }
}
