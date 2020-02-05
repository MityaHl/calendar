import { takeEvery, call, put } from 'redux-saga/effects'
import { onGetEvents } from '@/store/actions/events'

function loadEvents () {
  return window.gapi.client.calendar.events.list({
    calendarId: 'primary',
    showDeleted: false,
    singleEvents: true,
    orderBy: 'startTime',
  }).then(response => {
    return response.result.items.map((item, index) => (
      {
        key: item.id,
        title: item.summary,
        start: new Date(item.start.dateTime),
        end: new Date(item.end.dateTime),
        color: item.colorId,
      }
    ))
  })
}

function * putData (action) {
  try {
    const data = yield call(loadEvents)
    yield put(onGetEvents(data))
  } catch (error) {
    console.log(error)
  }
}

export function * watchLoad () {
  yield takeEvery('ON_GET_EVENTS', putData)
}
