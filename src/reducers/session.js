import { LOG_IN, LOG_OUT } from '../actions/SessionActions'

const initialState = {
  user: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: {
          name: action.payload.name,
        },
      }
    case LOG_OUT:
      return {
        ...initialState,
        user: null,
      }
    default:
      return state
  }
}
