import { connect } from 'react-redux'

import { onAddEvent } from '@/store/actions/events'

import CreateEventButton from './component'

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  onAddEvent: () => dispatch(onAddEvent()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventButton)
