import { connect } from 'react-redux'

import CreateEventSetRepeatFormat from './component'

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventSetRepeatFormat)
