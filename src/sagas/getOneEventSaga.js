import { takeEvery, call, put } from 'redux-saga/effects'
import { onGetEvent } from '@/store/actions/events'
import { changeTrue } from '@/store/actions/changeAbility'
import { ON_GET_EVENT } from '@/constants'
import { getOneEventMapper } from '@/helpers/mappers'

function loadEvents ({ recId, id }) {
  return window.gapi.client.calendar.events.get({
    calendarId: 'primary',
    eventId: recId || id,
  }).then(response => {
    return getOneEventMapper(response)
  })
}

function * putData (action) {
  try {
    const data = yield call(loadEvents, action.payload)
    console.log(data)
    yield put(onGetEvent(data))
  } catch (error) {
    console.log(error)
    yield put(changeTrue())
  }
}

export function * watchOneEvent () {
  yield takeEvery(ON_GET_EVENT, putData)
}
