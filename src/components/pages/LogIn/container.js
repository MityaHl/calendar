import { connect } from 'react-redux'

import { onLogin } from '@/store/actions/login'
import { getUserLogin } from '@/store/selectors/selectors'

import LogIn from './component'

const mapStateToProps = state => ({
  login: getUserLogin(state),
})

const mapDispatchToProps = dispatch => ({
  onLogIn: () => dispatch(onLogin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
