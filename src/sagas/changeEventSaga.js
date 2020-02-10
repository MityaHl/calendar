import { takeEvery, call, put } from 'redux-saga/effects'
import { getEvents } from '@/store/actions/events'
import { ON_CHANGE_EVENTS } from '@/constants'

const loadEvents = data => {
  return window.gapi.client.calendar.events
    .patch({
      calendarId: 'primary',
      eventId: data.id,
      resource: data,
    })
}

function * putData (action) {
  try {
    yield call(loadEvents, action.payload)
    yield put(getEvents)
  } catch (error) {
    console.log(error)
  }
}

export function * watchUpdate () {
  yield takeEvery(ON_CHANGE_EVENTS, putData)
}
