import { connect } from 'react-redux'

import { onAddEvent } from '@/store/actions/events'

import CreateEventModal from './component'

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  onAddEvent: data => dispatch(onAddEvent(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventModal)
