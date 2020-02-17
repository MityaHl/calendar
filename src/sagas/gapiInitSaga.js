import { takeEvery, call, put } from 'redux-saga/effects'
import { getEvents } from '@/store/actions/events'
import { login } from '@/store/actions/login'
import { getColors } from '@/store/actions/colors'
import { spinnerFalse } from '@/store/actions/spinner'
import { ON_LOAD } from '@/constants'
import { loadObject } from '@/constants/loadObject'

export function delay (ms, result = ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(result), ms)
  })
}

export function wait (ms, result) {
  return call(delay, ms, result)
}

const loadEvents = () => {
  return window.gapi.load('client:auth2', () => {
    return window.gapi.client
      .init(loadObject)
  })
}

const getIsAuth = () => {
  const isAuth = window.gapi.auth2.getAuthInstance().currentUser.get().w3.U3
  return isAuth
}

function * putData () {
  try {
    yield call(loadEvents)
    yield put(spinnerFalse())
    yield wait(5000)
    const user = yield call(getIsAuth)
    yield put(login(user))
    yield put(getColors)
    yield put(getEvents)
  } catch (error) {
    console.log(error)
  }
}

export function * watchInit () {
  yield takeEvery(ON_LOAD, putData)
}
