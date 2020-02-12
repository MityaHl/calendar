import { connect } from 'react-redux'

import { changeFalse } from '@/store/actions/changeAbility'

import ChangeBlockedModal from './component'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  changeFalse: () => dispatch(changeFalse()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeBlockedModal)
