import reducer, { initialState } from './reducer'
import * as t from './actionTypes'

describe('news reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('NEWS_GET_REQUEST after situation without errorMsg', () => {
    const action = {
      type: t.NEWS_GET_REQUEST,
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      errorMsg: null,
    })
  })

  it('NEWS_GET_REQUEST after error', () => {
    const initialStateWithError = {
      data: null,
      isLoading: true,
      errorMsg: 'Unknown error',
    }

    const action = {
      type: t.NEWS_GET_REQUEST,
    }

    expect(reducer(initialStateWithError, action)).toEqual({
      ...initialStateWithError,
      isLoading: true,
      errorMsg: null, // обнулили ошибку
    })
  })

  it('NEWS_GET_SUCCESS', () => {
    const initialState = {
      data: null,
      isLoading: true,
      errorMsg: null,
    }

    const action = {
      type: t.NEWS_GET_SUCCESS,
      payload: [1, 2, 3],
    }

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      data: action.payload,
    })
  })

  it('NEWS_GET_FAILURE', () => {
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
