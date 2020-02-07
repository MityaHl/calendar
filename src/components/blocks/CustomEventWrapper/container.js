import { connect } from 'react-redux'

import CustomEventWrapper from './component'

const mapStateToProps = state => ({
  colors: state.colors,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CustomEventWrapper)
