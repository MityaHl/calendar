import { LOGIN, ON_LOGIN, ON_LOAD, CHECK_LOGIN } from '@/constants'

export const onLoad = () => ({
  type: ON_LOAD,
})

export const login = data => ({
  type: LOGIN,
  payload: data,
})

export const onLogin = () => ({
  type: ON_LOGIN,
})

export const checkLogin = () => ({
  type: CHECK_LOGIN,
})
