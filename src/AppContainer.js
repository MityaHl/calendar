import { connect } from 'react-redux'

import App from './App'

const mapStateToProps = state => ({
  state: state,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)
