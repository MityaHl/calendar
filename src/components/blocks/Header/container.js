import { connect } from 'react-redux'

import Header from './component'
import { getUserLogin } from '@/store/selectors/selectors'

const mapStateToProps = state => {
  return {
    login: getUserLogin(state),
  }
}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
