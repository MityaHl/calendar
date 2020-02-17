import { combineReducers } from 'redux'
import login from './login'
import events from './events'
import spinner from './spinner'
import colors from './colors'
import weekDays from './weekDays'
import repeatFormat from './repeatFormat'
import eventsForChange from './eventsForChange'
import changeAbility from './changeAbility'

export default combineReducers({
  login,
  events,
  spinner,
  colors,
  repeatFormat,
  weekDays,
  eventsForChange,
  changeAbility,
})
