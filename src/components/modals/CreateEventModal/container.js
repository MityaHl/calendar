import { connect } from 'react-redux'

import { onAddEvent } from '@/store/actions/events'
import { getEventColors, getAllWeekDays } from '@/store/selectors/selectors'

import CreateEventModal from './component'

const mapStateToProps = state => ({
  colors: getEventColors(state),
  weekDays: getAllWeekDays(state),
})

const mapDispatchToProps = dispatch => ({
  onAddEvent: data => dispatch(onAddEvent(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventModal)
