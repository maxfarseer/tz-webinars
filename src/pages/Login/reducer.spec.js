import reducer, { initialState } from './reducer'
import * as t from './actionTypes'

describe('session reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('LOG_IN_REQUEST', () => {
    const action = {
      type: t.LOG_IN_REQUEST,
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      errorMsg: null,
    })
  })

  it('LOG_IN_SUCCESS', () => {
    const action = {
      type: t.LOG_IN_SUCCESS,
      payload: {
        email: 'm@m.com',
      },
      errorMsg: null,
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      user: {
        name: 'm@m.com',
      },
      errorMsg: null,
    })
  })

  it('LOG_IN_FAILURE', () => {
    const action = {
      type: t.LOG_IN_FAILURE,
      payload: {
        errorMsg: 'something going wrong',
      },
      error: true,
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      errorMsg: 'something going wrong',
    })
  })
})
