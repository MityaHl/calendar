import { takeEvery, call, put } from 'redux-saga/effects'
import { onGetEvent } from '@/store/actions/events'
import { ON_GET_EVENT } from '@/constants'
import { getOneEventMapper } from '@/helpers/mappers'

function loadEvents (id) {
  return window.gapi.client.calendar.events.get({
    calendarId: 'primary',
    eventId: id,
  }).then(response => {
    return getOneEventMapper(response)
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
