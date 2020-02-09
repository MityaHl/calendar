import { LOGOUT, ON_LOGOUT } from '@/constants'

export const logout = () => ({
  type: LOGOUT,
  payload: false,
})

export const onLogout = () => ({
  type: ON_LOGOUT,
})
