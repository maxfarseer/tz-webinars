import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { API_ROOT } from '../../constants/Defaults'
import * as t from './actionTypes'

import { loginRequest, loginSuccess, loginFailure, logIn } from './actions'

import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('SessionActions', () => {
  describe('Sync actions', () => {
    it('loginRequest(): should create an action to set isLoading', () => {
      const expectedAction = {
        type: t.LOG_IN_REQUEST,
      }
      expect(loginRequest()).toEqual(expectedAction)
    })

    it('loginSuccess(): should attach news data', () => {
      const expectedAction = {
        type: t.LOG_IN_SUCCESS,
        payload: {
          email: 'm@m.com',
        },
      }
      expect(loginSuccess('m@m.com')).toEqual(expectedAction)
    })

    it('loginFailure(): should attach error message', () => {
      const errorMessage = 'wrong password'
      const expectedAction = {
        type: t.LOG_IN_FAILURE,
        payload: {
          errorMsg: errorMessage,
        },
        error: true,
      }
      expect(loginFailure(errorMessage)).toEqual(expectedAction)
    })
  })

  describe('async actions', () => {
    afterEach(() => {
      fetchMock.reset()
      fetchMock.restore()
    })

    it('creates LOG_IN_SUCCESS when fetching logIn has been done', () => {
      fetchMock.postOnce(`${API_ROOT}/validate`, {
        headers: { 'content-type': 'application/json' },
        body: { data: { id: 1 }, status: 'ok' },
      })

      const params = { email: 'max@max.com', password: '12' }
      const cb = () => {}

      const expectedActions = [loginRequest(), loginSuccess(params.email)]
      const store = mockStore({})

      return store.dispatch(logIn(params, cb)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
