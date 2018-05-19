import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { API_ROOT } from '../constants/Defaults'
import {
  NEWS_GET_REQUEST,
  NEWS_GET_SUCCESS,
  //NEWS_GET_FAILURE,
  newsRequest,
  newsSuccess,
  //newsFailure,
  getNews,
} from './NewsActions'

import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('NewsActions', () => {
  describe('Sync actions', () => {
    it('newsRequest(): should create an action to set isLoading', () => {
      const expectedAction = {
        type: NEWS_GET_REQUEST,
      }
      expect(newsRequest()).toEqual(expectedAction)
    })

    it('newsSuccess(): should attach news data', () => {
      const expectedAction = {
        type: NEWS_GET_SUCCESS,
        payload: [1, 2, 3],
      }
      expect(newsSuccess([1, 2, 3])).toEqual(expectedAction)
    })
  })

  describe('async actions', () => {
    afterEach(() => {
      fetchMock.reset()
      fetchMock.restore()
    })

    it('creates NEWS_GET_SUCCESS when fetching news has been done', () => {
      fetchMock.getOnce(`${API_ROOT}/news`, {
        headers: { 'content-type': 'application/json' },
        body: { data: [1, 2, 3], status: 'ok' },
      })

      const expectedActions = [newsRequest(), newsSuccess([1, 2, 3])]
      const store = mockStore({ todos: [] })

      return store.dispatch(getNews()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
