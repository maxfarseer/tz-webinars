// @flow
import { combineReducers } from 'redux'
import session from '../pages/Login'
import news from '../pages/News'

export default combineReducers({
  [news.constants.NAME]: news.reducer,
  [session.constants.NAME]: session.reducer,
})
