import { takeEvery, call, put } from 'redux-saga/effects'
import { getEvents } from '@/store/actions/events'

const loadEvents = data => {
  console.log(data)
  const weekly = 'RRULE:FREQ=WEEKLY;BYDAY=' + data.daysForRepeat.join(',') + ';INTERVAL=1;'
  const daily = 'RRULE:FREQ=DAILY;INTERVAL=' + data.daysInterval
  const hourly = 'RRULE:FREQ=DAILY;INTERVAL=' + data.hoursInterval + ';UNTIL=20200205T210000Z'
  let recurrenceData = ''

  switch (data.repeatFormat) {
    case 0: recurrenceData = hourly
      break
    case 1: recurrenceData = daily
      break
    case 2: recurrenceData = weekly
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
  yield takeEvery('ADD_EVENT', putData)
}
