import { takeEvery, call, put } from 'redux-saga/effects'
import { onGetColors } from '@/store/actions/colors'
import { GET_COLORS } from '@/constants'

function loadEvents () {
  return window.gapi.client.calendar.colors.get()
    .then(response => {
      const colors = response.result.event
      const arrOfColors = []
      for (const key in colors) {
        arrOfColors.push(colors[key])
      }
      return arrOfColors
    })
}

function * putData (action) {
  try {
    const data = yield call(loadEvents)
    yield put(onGetColors(data))
  } catch (error) {
    console.log(error)
  }
}

export function * watchColors () {
  yield takeEvery(GET_COLORS, putData)
}
