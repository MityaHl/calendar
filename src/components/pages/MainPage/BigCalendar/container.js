import { connect } from 'react-redux'

import { getEvents, getEvent, closeEvent } from '@/store/actions/events'

import BigCalendar from './component'

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEvents()),
  getEvent: id => dispatch(getEvent(id)),
  closeEvent: () => dispatch(closeEvent()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BigCalendar)
