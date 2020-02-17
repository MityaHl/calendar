import { CHANGE_TRUE, CHANGE_FALSE } from '@/constants'

export const changeTrue = () => ({
  type: CHANGE_TRUE,
  payload: true,
})

export const changeFalse = () => ({
  type: CHANGE_FALSE,
  payload: false,
})
