import React from 'react'
import { css } from 'aphrodite'
import Button from '@material-ui/core/Button'

import styles from './styles'

const LogOutButton = () => {
  return (
    <Button
      variant="outlined"
      color="primary"
      className={css(styles.button)}
    >
      Create event
    </Button>
  )
}

export default LogOutButton
