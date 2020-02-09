import { takeEvery, call, put } from 'redux-saga/effects'
import { logout } from '@/store/actions/logout'
import { ON_LOGOUT } from '@/constants'

const loadEvents = () => {
  return window.gapi.auth2.getAuthInstance().signOut()
}

function * putData () {
  try {
    yield call(loadEvents)
    yield put(logout())
  } catch (error) {
    console.log(error)
  }
}

export function * watchLoout () {
  yield takeEvery(ON_LOGOUT, putData)
}
