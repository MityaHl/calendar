import { connect } from 'react-redux'

import CustomEventWrapper from './component'
import { getEventColors } from '@/store/selectors/selectors'

const mapStateToProps = state => ({
  colors: getEventColors(state),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CustomEventWrapper)
