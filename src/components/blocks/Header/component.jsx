import React from 'react'
import { css } from 'aphrodite'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import HeaderTitle from './HeaderTitle'
import HeaderMenu from './HeaderMenu'
import LogOutButton from '@/components/controls/LogOutButton'
import CreateEventButton from '@/components/controls/CreateEventButton'

import styles from './style'

const Header = () => {
  return (
    <AppBar position="static" className={css(styles.header)}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid
            item
            xs={3}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <HeaderTitle />
          </Grid>
          <Grid
            item
            xs={7}
            container
            direction="row"
            justify="flex-start"
          >
            <HeaderMenu />
            <CreateEventButton />
          </Grid>
          <Grid item xs={2} container>
            <LogOutButton />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
