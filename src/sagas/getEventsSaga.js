import { takeEvery, call, put } from 'redux-saga/effects'
import { onGetEvents } from '@/store/actions/events'
import { ON_GET_EVENTS } from '@/constants'
import { getEventsMapper } from '@/helpers/mappers'

const loadCalendars = () => {
  return window.gapi.client.calendar.calendarList.list()
    .then(
      response => {
        return response.result.items.map((item, index) => {
          return {
            id: item.id,
            accessRole: item.accessRole,
          }
        })
      }
    )
}

function loadEvents (calendars) {
  return Promise.all(
    calendars.map((calendar, index) => {
      return window.gapi.client.calendar.events.list({
        calendarId: calendar.id,
        showDeleted: false,
        singleEvents: true,
        orderBy: 'startTime',
      })
    })
  ).then(values => {
    return (values.reduce((events, value) => {
      return events.concat(value)
    }, []))
  })
}

function * putData () {
  try {
    const calendars = yield call(loadCalendars)
    const events = yield call(loadEvents, calendars)
    const data = yield call(getEventsMapper, events)
    yield put(onGetEvents(data))
  } catch (error) {
    console.log(error)
  }
}

export function * watchLoad () {
  yield takeEvery(ON_GET_EVENTS, putData)
}
