import React from 'react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import styles from './styles'

const Login = ({ onLogIn }) => {
  const signIn = () => {
    window.gapi.auth2.getAuthInstance().signIn().then(user => {
      onLogIn(user)
    })
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={css(styles.grid)}
    >
      <Button
        onClick={signIn}
        variant="contained"
        className={css(styles.button)}
      >
        <Typography className={css(styles.typography)}>
          SignIn with Google
        </Typography>
      </Button>
    </Grid>
  )
}

Login.propTypes = {
  onLogIn: PropTypes.func,
}

export default Login
