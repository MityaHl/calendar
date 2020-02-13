import React, { useCallback } from 'react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'

import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import styles from './styles'

const CreateEventSetColor = ({ colors, setColor }) => {
  const setEventColor = useCallback(event => {
    setColor(event.target.value + 1)
  })

  return (
    <Select
      className={css(styles.select)}
      defaultValue={0}
      onChange={setEventColor}
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
  setColor: PropTypes.func,
}

export default CreateEventSetColor
