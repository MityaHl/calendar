import { SPINNER_TRUE, SPINNER_FALSE } from '@/constants'

export default function spinner (state = true, action) {
  switch (action.type) {
    case SPINNER_TRUE: return action.payload
    case SPINNER_FALSE: return action.payload

    default: return state
  }
}
