export default function colors (state = [], action) {
  switch (action.type) {
    case 'ON_GET_COLORS': return action.payload

    default: return state
  }
}
