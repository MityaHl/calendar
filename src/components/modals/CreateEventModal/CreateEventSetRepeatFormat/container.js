import { connect } from 'react-redux'

import CreateEventSetRepeatFormat from './component'
import { getRepeatTypes } from '@/store/selectors/selectors'

const mapStateToProps = state => ({
  repeatTypes: getRepeatTypes(state),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventSetRepeatFormat)
