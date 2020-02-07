import { GET_COLORS, ON_GET_COLORS } from '@/constants'

export const getColors = () => ({
  type: GET_COLORS,
})

export const onGetColors = data => ({
  type: ON_GET_COLORS,
  payload: data,
})
