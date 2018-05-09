import {
  NEWS_GET_REQUEST,
  NEWS_GET_SUCCESS,
  NEWS_GET_FAILURE,
} from '../actions/NewsActions'

const initialState = {
  isLoading: false,
  data: [],
  errorMsg: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEWS_GET_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMsg: null,
      }
    case NEWS_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case NEWS_GET_FAILURE:
      return {
        ...state,
        errorMsg: action.payload.errorMsg,
      }
    default:
      return state
  }
}
