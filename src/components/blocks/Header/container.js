import { connect } from 'react-redux'

import Header from './component'

const mapStateToProps = state => ({
  login: !!state.login,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
