import { SPINNER_TRUE, SPINNER_FALSE } from '@/constants'

export const spinnerTrue = () => ({
  type: SPINNER_TRUE,
  payload: true,
})

export const spinnerFalse = () => ({
  type: SPINNER_FALSE,
  payload: false,
})
