import React from 'react'
import { css } from 'aphrodite'
import ClipLoader from 'react-spinners/ClipLoader'
import Grid from '@material-ui/core/Grid'

import styles from './styles'

const Spinner = () => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      className={css(styles.spinner)}
    >
      <ClipLoader
        color="#1a73e8"
        size={80} />
    </Grid>
  )
}

export default Spinner
