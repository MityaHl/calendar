import { connect } from 'react-redux'

import { logout } from '@/store/actions/logout'

import LogOut from './component'

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  onLogOut: () => {
    dispatch(logout())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LogOut)
