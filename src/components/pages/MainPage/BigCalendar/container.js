import { connect } from 'react-redux'

import { onDeleteEvent, getEvents } from '@/store/actions/events'

import BigCalendar from './component'

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  onDeleteEvent: data => dispatch(onDeleteEvent(data)),
  getEvents: () => dispatch(getEvents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BigCalendar)
