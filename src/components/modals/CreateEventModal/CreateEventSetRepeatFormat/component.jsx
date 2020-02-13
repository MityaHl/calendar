import React, { useCallback } from 'react'
import { css } from 'aphrodite'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'

import styles from './styles'

const CreateEventSetRepeatFormat = ({ repeatFormat, setRepeateFormat, repeatTypes }) => {
  const setEventRepeatFormat = useCallback(event => {
    setRepeateFormat(event.target.value)
  })

  return (
    <Select
      className={css(styles.select)}
      value={repeatFormat}
      onChange={setEventRepeatFormat}
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
  setRepeateFormat: PropTypes.func,
  repeatFormat: PropTypes.string,
}

export default CreateEventSetRepeatFormat
