import { takeEvery, call, put } from 'redux-saga/effects'
import { getEvents } from '@/store/actions/events'
import { ADD_EVENT } from '@/constants'
import { eventForCreate } from '@/helpers/mappers'

const loadEvents = data => {
  const event = eventForCreate({
    title: data.title,
    color: data.color,
    startDate: data.startDate,
    endDate: data.endDate,
    interval: data.interval,
    endAfterDate: data.endAfterDate,
    daysForRepeat: data.daysForRepeat,
    repeatFormat: data.repeatFormat,
  })
  console.log(event)
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

export function * watchAdd () {
  yield takeEvery(ADD_EVENT, putData)
}
