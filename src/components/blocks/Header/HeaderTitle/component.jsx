import React from 'react'
import { css } from 'aphrodite'
import Typography from '@material-ui/core/Typography'

import styles from './style'

const moment = require('moment')

const HeaderTitle = () => {
  return (
    <Typography className={css(styles.title)}>
      {
        moment().format('MMMM, Do')
      }
    </Typography>
  )
}

export default HeaderTitle
