import { LOGIN, ON_LOGIN, CHECK_LOGIN } from '@/constants'

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
