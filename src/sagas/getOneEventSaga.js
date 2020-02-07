import { takeEvery, call, put } from 'redux-saga/effects'
import { onGetEvent } from '@/store/actions/events'
import { ON_GET_EVENT } from '@/constants'

function loadEvents (id) {
  return window.gapi.client.calendar.events.get({
    calendarId: 'primary',
    eventId: id,
  }).then(response => {
    return {
      key: response.result.id,
      title: response.result.summary,
      start: new Date(response.result.start.dateTime),
      end: new Date(response.result.end.dateTime),
      color: response.result.colorId,
      recurrence: response.result.recurrence[0].slice(6).split(';').map((item, index) => {
        return item.slice(item.indexOf('=') + 1)
      }),
    }
  })
}

function * putData (action) {
  console.log(action.payload)

  try {
    const data = yield call(loadEvents, action.payload)
    yield put(onGetEvent(data))
  } catch (error) {
    console.log(error)
  }
}

export function * watchOneEvent () {
  yield takeEvery(ON_GET_EVENT, putData)
}
