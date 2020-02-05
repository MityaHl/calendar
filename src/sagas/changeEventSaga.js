import { takeEvery, call, put } from 'redux-saga/effects'
import { getEvents } from '@/store/actions/events'

const loadEvents = data => {
  console.log('1', data)
  return window.gapi.client.calendar.events
    .update({
      calendarId: 'primary',
      eventId: data.id,
      resource: data,
    })
}

function * putData (action) {
  try {
    yield call(loadEvents, action.payload)
    yield put(getEvents())
  } catch (error) {
    console.log(error)
  }
}

export function * watchUpdate () {
  yield takeEvery('ON_CHANGE_EVENTS', putData)
}
