import { checkResponse } from '../helpers/session'
import { httpGet } from '../helpers/network'

export const NEWS_GET_REQUEST = 'NEWS_GET_REQUEST'
export const NEWS_GET_SUCCESS = 'NEWS_GET_SUCCESS'
export const NEWS_GET_FAILURE = 'NEWS_GET_FAILURE'

export function getNews() {
  return dispatch => {
    dispatch({
      type: NEWS_GET_REQUEST,
    })

    httpGet(`news`)
      .then(res => {
        if (checkResponse(res)) {
          dispatch({
            type: NEWS_GET_SUCCESS,
            payload: res.data,
          })
        } else {
          dispatch({
            type: NEWS_GET_FAILURE,
            payload: {
              errorMsg: res.message,
            },
            error: true,
          })
        }
      })
      .catch(error => {
        dispatch({
          type: NEWS_GET_FAILURE,
          payload: {
            errorMsg: 'Сервер временно недоступен',
          },
          error: true,
        })
      })
  }
}
