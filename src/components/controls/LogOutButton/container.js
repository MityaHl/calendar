import { connect } from 'react-redux'

import { onLogout } from '@/store/actions/logout'

import LogOut from './component'

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  onLogOut: () => dispatch(onLogout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LogOut)
