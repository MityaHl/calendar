import React from 'react'
import { css } from 'aphrodite'
import { Select } from 'formik-material-ui'
import MenuItem from '@material-ui/core/MenuItem'

import styles from './styles'

const EditEventSetColor = ({ colors }) => {
  return (
    <Select
      className={css(styles.select)}
      name="color"
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

export default EditEventSetColor
