import { takeEvery, call, put } from 'redux-saga/effects'
import { getEvents } from '@/store/actions/events'
import { ON_CHANGE_EVENTS } from '@/constants'
import { fullEventForUpdate } from '@/helpers/mappers'

const loadEvents = data => {
  const event = fullEventForUpdate(data)
  return window.gapi.client.calendar.events
    .update({
      calendarId: 'primary',
      eventId: event.id,
      resource: event,
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
  yield takeEvery(ON_CHANGE_EVENTS, putData)
}
