import { CHANGE_TRUE, CHANGE_FALSE } from '@/constants'

export default function changeAbility (state = false, action) {
  switch (action.type) {
    case CHANGE_TRUE: return action.payload
    case CHANGE_FALSE: return action.payload

    default: return state
  }
}
