import React from 'react'
import { css } from 'aphrodite'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import styles from './styles'

const Login = ({ state, onLogIn }) => {
  const signIn = () => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          apiKey: 'AIzaSyC0LlE4TTsGdXM2EKJ8Gpubjk3_ctIs_cc',
          clientId: '816106006496-qo93s99ofq2blmontijj9a41j3jifv6h.apps.googleusercontent.com',
          discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
          scope: 'https://www.googleapis.com/auth/calendar',
        })
        .then(() => {
          console.log('init Ok')
        })

      window.gapi.auth2.getAuthInstance().signIn().then(user => {
        onLogIn(user)
      })
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

export default Login
