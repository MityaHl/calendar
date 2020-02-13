import React from 'react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Redirect } from 'react-router-dom'

import styles from './styles'

const Login = ({ onLogIn, login }) => {
  if (login) {
    return (
      <Redirect to="/" />
    )
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
        onClick={onLogIn}
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

Login.defaultTypes = {
  login: null,
}

Login.propTypes = {
  onLogIn: PropTypes.func,
  login: PropTypes.string,
}

export default Login
