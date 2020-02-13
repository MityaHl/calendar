import { all } from 'redux-saga/effects'

import { watchAdd } from './addEventSaga'
import { watchDelete } from './deleteEventSaga'
import { watchLoad } from './getEventsSaga'
import { watchUpdate } from './changeEventSaga'
import { watchColors } from './getEventColorsSaga'
import { watchFastAdd } from './addFastEventSaga'
import { watchOneEvent } from './getOneEventSaga'
import { watchLogin } from './logInSaga'
import { watchLoout } from './logOutSaga'
import { watchInit } from './gapiInitSaga'

export default function * rootSaga () {
  yield all([
    watchDelete(),
    watchAdd(),
    watchLoad(),
    watchUpdate(),
    watchColors(),
    watchFastAdd(),
    watchOneEvent(),
    watchLogin(),
    watchLoout(),
    watchInit(),
  ])
}
