import { connect } from 'react-redux'

import { onLogin } from '@/store/actions/login'

import LogIn from './component'

const mapStateToProps = state => ({
  login: state.login,
})

const mapDispatchToProps = dispatch => ({
  onLogIn: () => dispatch(onLogin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
