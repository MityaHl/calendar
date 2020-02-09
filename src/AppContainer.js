import { connect } from 'react-redux'

import App from './App'

import { login } from '@/store/actions/login'
import { spinnerFalse } from '@/store/actions/spinner'
import { getColors } from './store/actions/colors'

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data)),
  getColors: () => dispatch(getColors()),
  spinner: () => dispatch(spinnerFalse()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
