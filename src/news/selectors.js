import { createSelector } from 'reselect'
import { NAME } from './constants'
//import { filterActive, filterCompleted } from './model';

// TODO: newsSelector, isLoading selector, errorNewsSelector ??
const newsSelector = state => state[NAME].data
const newsIsLoading = state => state[NAME].isLoading
const newsErrorMsg = state => state[NAME].errorMsg

export const getAll = createSelector(
  newsSelector,
  newsIsLoading,
  newsErrorMsg,
  (data, isLoading, errorMsg) => ({
    data,
    isLoading,
    errorMsg,
  })
)

/* export const getCounts = createSelector(
  getAll,
  getCompleted,
  getActive,
  (allTodos, completedTodos, activeTodos) => ({
    all: allTodos.length,
    completed: completedTodos.length,
    active: activeTodos.length
  })
); */
