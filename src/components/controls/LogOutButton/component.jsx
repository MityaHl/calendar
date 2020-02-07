import React from 'react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

import styles from './styles'

const LogOutButton = ({ onLogOut }) => {
  const logOut = () => {
    window.gapi.auth2.getAuthInstance().signOut().then(onLogOut)
  }

  return (
    <Button
      variant="outlined"
      color="primary"
      className={css(styles.button)}
      onClick={logOut}
    >
      LogOut
    </Button>
  )
}

LogOutButton.propTypes = {
  onLogOut: PropTypes.func,
}

export default LogOutButton
