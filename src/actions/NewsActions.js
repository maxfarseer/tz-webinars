import { checkResponse } from '../helpers/session'
import { httpGet } from '../helpers/network'

export const NEWS_GET_REQUEST = 'NEWS_GET_REQUEST'
export const NEWS_GET_SUCCESS = 'NEWS_GET_SUCCESS'
export const NEWS_GET_FAILURE = 'NEWS_GET_FAILURE'

const defaultErrorMsg = 'Сервер временно недоступен'

export const newsRequest = () => ({
  type: NEWS_GET_REQUEST,
})

export const newsSuccess = data => ({
  type: NEWS_GET_SUCCESS,
  payload: data,
})

export const newsFailure = (errorMsg = defaultErrorMsg) => ({
  type: NEWS_GET_FAILURE,
  payload: {
    errorMsg: errorMsg,
  },
  error: true,
})

export function getNews() {
  return dispatch => {
    dispatch(newsRequest())
    /* return fetch('news')
      .then(res => res.json())
      .then(body => dispatch(newsSuccess(body.data)))
      .catch(err => dispatch(newsFailure(err.message))) */

    return httpGet(`news`)
      .then(res => {
        if (checkResponse(res)) {
          dispatch(newsSuccess(res.data))
        } else {
          dispatch(newsFailure(res.message))
        }
      })
      .catch(error => {
        dispatch(newsFailure())
      })
  }
}
