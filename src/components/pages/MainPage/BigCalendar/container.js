import { connect } from 'react-redux'

import { getEvents, getEvent, closeEvent } from '@/store/actions/events'
import { changeTrue } from '@/store/actions/changeAbility'

import BigCalendar from './component'

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEvents()),
  getEvent: id => dispatch(getEvent(id)),
  closeEvent: () => dispatch(closeEvent()),
  changeTrue: () => dispatch(changeTrue()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BigCalendar)
