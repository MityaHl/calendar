import React from 'react'
import { css } from 'aphrodite'
import Button from '@material-ui/core/Button'

import styles from './styles'

const LogOutButton = ({ state, onLogOut }) => {
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

export default LogOutButton
