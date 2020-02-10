import { takeEvery, call, put } from 'redux-saga/effects'
import { onGetEvents } from '@/store/actions/events'
import { ON_GET_EVENTS } from '@/constants'
import { getEventsMapper } from '@/helpers/mappers'

function loadEvents () {
  return window.gapi.client.calendar.events.list({
    calendarId: 'primary',
    showDeleted: false,
    singleEvents: true,
    orderBy: 'startTime',
  }).then(response => {
    return getEventsMapper(response)
  })
}

function * putData () {
  try {
    const data = yield call(loadEvents)
    yield put(onGetEvents(data))
  } catch (error) {
    console.log(error)
  }
}

export function * watchLoad () {
  yield takeEvery(ON_GET_EVENTS, putData)
}
