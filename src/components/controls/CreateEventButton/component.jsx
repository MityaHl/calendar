import React from 'react'
import { css } from 'aphrodite'

import CreateEventModal from '@/components/modals/CreateEventModal'

import styles from './styles'

const CreateEventButton = () => {
  return (
    <CreateEventModal className={css(styles.button)} />
  )
}

export default CreateEventButton
