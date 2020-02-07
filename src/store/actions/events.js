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

export const getEvent = id => ({
  type: 'ON_GET_EVENT',
  payload: id,
})

export const onChangeEvent = data => ({
  type: 'ON_CHANGE_EVENTS',
  payload: data,
})

export const onAddFastEvent = data => ({
  type: 'ADD_FAST_EVENT',
  payload: data,
})

export const closeEvent = () => ({
  type: 'CLEAR_ONE_EVENT',
  payload: {
    recurrence: ['', '', '', ''],
  },
})

export const onGetEvent = data => ({
  type: 'GET_ONE_EVENT',
  payload: data,
})
