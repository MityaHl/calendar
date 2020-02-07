import { connect } from 'react-redux'

import { login } from '@/store/actions/login'

import LogIn from './component'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  onLogIn: data => dispatch(login(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
