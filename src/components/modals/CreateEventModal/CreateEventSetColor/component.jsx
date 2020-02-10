import React from 'react'
import { css } from 'aphrodite'

import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import styles from './styles'

const CreateEventSetColor = ({ colors, setColor }) => {
  return (
    <Select
      className={css(styles.select)}
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      defaultValue={0}
      onChange={event => {
        setColor(event.target.value + 1)
      }}
    >
      {
        colors.map((color, index) => (
          <MenuItem key={index} value={index}>
            <div
              className={css(styles.div)}
              style={{
                backgroundColor: color.background,
              }} />
          </MenuItem>
        ))
      }
    </Select>
  )
}

export default CreateEventSetColor