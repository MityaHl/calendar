import React from 'react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import HeaderTitle from './HeaderTitle'
import LogOutButton from '@/components/controls/LogOutButton'
import CreateEventModal from '@/components/modals/CreateEventModal'

import styles from './style'

const Header = ({ login }) => {
  return (
    <AppBar position="static" className={css(styles.header)}>
      <Toolbar className={css(styles.toolbar)}>
        <Grid container alignItems="center">
          <Grid
            item
            xs={2}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <HeaderTitle />
          </Grid>
          <Grid
            item
            xs={8}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {login && <CreateEventModal />}
          </Grid>
          <Grid
            item
            xs={2}
            container
            direction="row"
            justify="center"
          >
            {login && <LogOutButton />}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  login: PropTypes.bool,
}

export default Header
