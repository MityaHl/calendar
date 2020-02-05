import { takeEvery, call, put } from 'redux-saga/effects'
import { getEvents } from '@/store/actions/events'

const loadEvents = event => {
  return window.gapi.client.calendar.events
    .delete({
      calendarId: 'primary',
      eventId: event,
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

export function * watchDelete () {
  yield takeEvery('DELETE_EVENT', putData)
}