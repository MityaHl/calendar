import { takeEvery, call, put } from 'redux-saga/effects'
import { getEvents } from '@/store/actions/events'
import { login } from '@/store/actions/login'
import { ON_LOGIN } from '@/constants'

const loadEvents = () => {
  return window.gapi.auth2.getAuthInstance().signIn()
}

function * putData () {
  try {
    const user = yield call(loadEvents)
    yield put(login(user))
    yield put(getEvents())
  } catch (error) {
    console.log(error)
  }
}

export function * watchLogin () {
  yield takeEvery(ON_LOGIN, putData)
}
