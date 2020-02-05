export const onGetEvents = data => ({
  type: 'GET_EVENT',
  payload: data,
})

export const onAddEvent = data => ({
  type: 'ADD_EVENT',
  payload: data,
})

export const onDeleteEvent = data => ({
  type: 'DELETE_EVENT',
  payload: data,
})

export const getEvents = () => ({
  type: 'ON_GET_EVENTS',
})

export const onChangeEvent = data => ({
  type: 'ON_CHANGE_EVENTS',
  payload: data,
})
