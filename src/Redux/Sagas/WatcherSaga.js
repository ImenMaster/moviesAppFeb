import { all } from 'redux-saga/effects'
import WatcherGetMovies from './WatcherGetMovies'

export  function* watcherSaga() {
  yield all([
    WatcherGetMovies(),
  ])
}