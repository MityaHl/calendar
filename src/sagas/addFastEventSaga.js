import { takeEvery, call, put } from 'redux-saga/effects'
import { getEvents } from '@/store/actions/events'
import { ADD_FAST_EVENT } from '@/constants'
import { eventForFastCreate } from '@/helpers/mappers'

const loadEvents = data => {
  const event = eventForFastCreate({
    title: data.title,
    date: data.date,
  })

  return window.gapi.client.calendar.events
    .insert({
      calendarId: 'primary',
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

export function * watchFastAdd () {
  yield takeEvery(ADD_FAST_EVENT, putData)
}
