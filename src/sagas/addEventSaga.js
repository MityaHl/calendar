import { takeEvery, call, put } from 'redux-saga/effects'
import { getEvents } from '@/store/actions/events'
import { ADD_EVENT } from '@/constants'

const loadEvents = data => {
  const afterData = data.endAfterDate.toISOString().replace(/[.]/g, '').replace(/[-]/g, '').replace(/[:]/g, '').slice(0, 8)
  console.log(afterData)

  const weekly = 'RRULE:FREQ=WEEKLY;BYDAY=' + data.daysForRepeat.join(',') +
   ';INTERVAL=' + data.interval + ';UNTIL=' + afterData + 'T220000Z'
  const daily = 'RRULE:FREQ=DAILY;INTERVAL=' + data.interval + ';UNTIL=' + afterData + 'T220000Z'
  let recurrenceData = ''

  switch (data.repeatFormat) {
    case 'DAILY': recurrenceData = daily
      break
    case 'WEEKLY': recurrenceData = weekly
      break
  }

  const event = {
    summary: data.title,
    start: {
      dateTime: new Date(data.startDate).toISOString(),
      timeZone: 'America/Los_Angeles',
    },
    end: {
      dateTime: new Date(data.endDate).toISOString(),
      timeZone: 'America/Los_Angeles',
    },
    colorId: data.color,
    recurrence: [
      recurrenceData,
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

export function * watchAdd () {
  yield takeEvery(ADD_EVENT, putData)
}
