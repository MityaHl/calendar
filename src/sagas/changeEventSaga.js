import { takeEvery, call, put } from 'redux-saga/effects'
import { getEvents } from '@/store/actions/events'
import { ON_CHANGE_EVENTS } from '@/constants'

const moment = require('moment')

const loadEvents = data => {
  let event = {}
  if (data.recurrence[0] === '') {
    console.log('111')
    event = {
      id: data.id,
      summary: data.summary,
      end: {
        dateTime: new Date(data.end.dateTime).toISOString(),
        timeZone: 'America/Los_Angeles',
      },
      start: {
        dateTime: new Date(data.start.dateTime).toISOString(),
        timeZone: 'America/Los_Angeles',
      },
      colorId: data.colorId,
    }
  } else {
    event = data
  }
  console.log(event)
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
