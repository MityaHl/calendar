import { takeEvery, call, put } from 'redux-saga/effects'
import { getEvents } from '@/store/actions/events'
import { ADD_FAST_EVENT } from '@/constants'

const loadEvents = data => {
  const afterData = data.date.toISOString().replace(/[.]/g, '').replace(/[-]/g, '').replace(/[:]/g, '').slice(0, 8)
  const daily = 'RRULE:FREQ=DAILY;INTERVAL=1;UNTIL=' + afterData + 'T220000Z'

  const event = {
    summary: data.title,
    start: {
      dateTime: new Date(data.date).toISOString(),
      timeZone: 'America/Los_Angeles',
    },
    end: {
      dateTime: new Date(data.date).toISOString(),
      timeZone: 'America/Los_Angeles',
    },
    colorId: 1,
    recurrence: [
      daily,
    ],
  }

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
