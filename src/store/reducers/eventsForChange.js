const initialState = {
  recurrence: ['', '', '', ''],
}

export default function eventsForChange (state = initialState, action) {
  switch (action.type) {
    case 'GET_ONE_EVENT': return action.payload
    case 'CLEAR_ONE_EVENT': return action.payload
    default: return state
  }
}
