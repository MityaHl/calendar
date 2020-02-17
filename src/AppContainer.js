import { connect } from 'react-redux'

import App from './App'

import { spinnerFalse } from '@/store/actions/spinner'
import { getColors } from './store/actions/colors'
import { login, onLoad } from '@/store/actions/login'
import {
  getUserLogin,
  getSpinner,
} from '@/store/selectors/selectors'

const mapStateToProps = state => ({
  spinner: getSpinner(state),
  loginData: getUserLogin(state),
})

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(onLoad()),
  login: data => dispatch(login(data)),
  getColors: () => dispatch(getColors()),
  closeSpinner: () => dispatch(spinnerFalse()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
