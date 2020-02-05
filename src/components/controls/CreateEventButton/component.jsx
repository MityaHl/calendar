import React from 'react'
import { css } from 'aphrodite'
import Button from '@material-ui/core/Button'
import CreateEventModal from '@/components/modals/CreateEventModal'

import styles from './styles'

const CreateEventButton = ({ state, onAddEvent }) => {
  return (
    <CreateEventModal className={css(styles.button)} />
  )
}

export default CreateEventButton
