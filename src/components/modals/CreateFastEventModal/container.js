import { connect } from 'react-redux'

import { onAddFastEvent } from '@/store/actions/events'

import CreateFastEventModal from './component'

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  onAddFastEvent: data => dispatch(onAddFastEvent(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateFastEventModal)
