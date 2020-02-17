import React from 'react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

import styles from './styles'

const LogOutButton = ({ onLogOut }) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      className={css(styles.button)}
      onClick={onLogOut}
    >
      LogOut
    </Button>
  )
}

LogOutButton.propTypes = {
  onLogOut: PropTypes.func,
}

export default LogOutButton
