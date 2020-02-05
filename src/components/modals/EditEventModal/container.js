import { connect } from 'react-redux'

import { onChangeEvent, onDeleteEvent } from '@/store/actions/events'

import EditEventModal from './component'

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  onChangeEvent: data => dispatch(onChangeEvent(data)),
  onDeleteEvent: data => dispatch(onDeleteEvent(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditEventModal)
