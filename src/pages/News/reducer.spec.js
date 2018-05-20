import reducer, { initialState } from './reducer'
import * as t from './actionTypes'

describe('news reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle NEWS_GET_REQUEST', () => {
    const action = {
      type: t.NEWS_GET_REQUEST,
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
    })
  })

  it('should handle NEWS_GET_SUCCESS', () => {
    const action = {
      type: t.NEWS_GET_SUCCESS,
      payload: [1, 2, 3],
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      data: [1, 2, 3],
    })
  })

  it('should handle NEWS_GET_FAILURE', () => {
    const action = {
      type: t.NEWS_GET_FAILURE,
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
