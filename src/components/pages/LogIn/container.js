import { connect } from 'react-redux'

import { login } from '@/store/actions/login'
import { getEvents } from '@/store/actions/events'

import LogIn from './component'

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  onLogIn: (data) => dispatch(login(data)),
  getEvents: () => dispatch(getEvents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
