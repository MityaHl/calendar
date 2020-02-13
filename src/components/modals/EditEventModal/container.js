import { connect } from 'react-redux'

import { onChangeEvent, onDeleteEvent } from '@/store/actions/events'
import {
  getUserLogin,
  getEventForChange,
  getEventColors,
  getRepeatTypes,
  getAllWeekDays,
} from '@/store/selectors/selectors'

import EditEventModal from './component'

const mapStateToProps = state => ({
  state: state,
  weekDays: getAllWeekDays(state),
  login: getUserLogin(state),
  colors: getEventColors(state),
  eventsForChange: getEventForChange(state),
  repeatTypes: getRepeatTypes(state),
})

const mapDispatchToProps = dispatch => ({
  onChangeEvent: data => dispatch(onChangeEvent(data)),
  onDeleteEvent: data => dispatch(onDeleteEvent(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditEventModal)
