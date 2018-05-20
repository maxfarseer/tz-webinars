// @flow
import { combineReducers } from 'redux'
import session from './session'
import news from '../news'

export default combineReducers({
  [news.constants.NAME]: news.reducer,
  session, // TODO
})
