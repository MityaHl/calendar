import React from 'react'
import { css } from 'aphrodite'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import Button from '@material-ui/core/Button'

import styles from './styles'

const NextPrevButtons = () => {
  return (
    <div className={css(styles.buttons)}>
      <Button className={css(styles.button)}>
        <ArrowLeftIcon />
      </Button>
      <Button className={css(styles.button)}>
        <ArrowRightIcon />
      </Button>
    </div>
  )
}

export default NextPrevButtons
