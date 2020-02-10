import React from 'react'
import { css } from 'aphrodite'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import styles from './styles'

const CreateEventSetRepeatFormat = ({ repeatFormat, setRepeateFormat, state }) => {
  return (
   <Select
      className={css(styles.select)}
      value={repeatFormat}
      onChange={event => {
        setRepeateFormat(event.target.value)
      }}
    >
      {
        state.repeatFormat.map((format, index) => (
          <MenuItem key={index} value={format}>
            {format}
          </MenuItem>
        ))
      }
    </Select>
  )
}

export default CreateEventSetRepeatFormat
