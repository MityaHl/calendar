import React from 'react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'

import { Select } from 'formik-material-ui'
import MenuItem from '@material-ui/core/MenuItem'

import styles from './styles'

const CreateEventSetColor = ({ colors }) => {
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

CreateEventSetColor.propTypes = {
  colors: PropTypes.array,
}

export default CreateEventSetColor
