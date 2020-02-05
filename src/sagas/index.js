import { all } from 'redux-saga/effects'

import { watchAdd } from './addEventSaga'
import { watchDelete } from './deleteEventSaga'
import { watchLoad } from './getEventsSaga'
import { watchUpdate } from './changeEventSaga'
import { watchColors } from './getEventColorsSaga'

export default function * rootSaga () {
  yield all([
    watchDelete(),
    watchAdd(),
    watchLoad(),
    watchUpdate(),
    watchColors(),
  ])
}
