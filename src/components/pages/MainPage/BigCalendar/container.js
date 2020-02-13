import { connect } from 'react-redux'

import { getEvents, getEvent, closeEvent } from '@/store/actions/events'
import { changeTrue } from '@/store/actions/changeAbility'
import {
  getEventColors,
  getAllEvents,
  getChangeAbility,
  getEventForChange,
} from '@/store/selectors/selectors'

import BigCalendar from './component'

const mapStateToProps = state => ({
  colors: getEventColors(state),
  events: getAllEvents(state),
  changeAbility: getChangeAbility(state),
  eventForChange: getEventForChange(state),
})

const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEvents()),
  getEvent: id => dispatch(getEvent(id)),
  closeEvent: () => dispatch(closeEvent()),
  changeTrue: () => dispatch(changeTrue()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BigCalendar)
