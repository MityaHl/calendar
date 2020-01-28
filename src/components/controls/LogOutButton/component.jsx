import React from 'react'
import { css } from 'aphrodite'
import Button from '@material-ui/core/Button'

import styles from './styles'

const CreateEventButton = () => {
  return (
    <Button
      variant="outlined"
      color="primary"
      className={css(styles.button)}
    >
      LogOut
    </Button>
  )
}

export default CreateEventButton
