import React from 'react'
import { css } from 'aphrodite'
import { Select } from 'formik-material-ui'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'

import styles from './styles'

const CreateEventSetRepeatFormat = ({ repeatTypes }) => {
  return (
    <Select
      className={css(styles.select)}
      name="repeatFormat"
    >
      {
        repeatTypes.map((format, index) => (
          <MenuItem key={index} value={format}>
            {format}
          </MenuItem>
        ))
      }
    </Select>
  )
}

CreateEventSetRepeatFormat.propTypes = {
  repeatTypes: PropTypes.array,
}

export default CreateEventSetRepeatFormat
