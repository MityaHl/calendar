import React from 'react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'

import styles from './styles'

const CustomEventWrapper = ({ event, colors }) => {
  const colorNum = event.color
  const color = colors[colorNum - 1].background
  console.log(event)
  return (
    <div
      style={{ backgroundColor: color }}
      className={css(styles.wrapper)}
    >
      <span>
        <strong className={css(styles.event)}>
          {event.title}
        </strong>
      </span>
    </div>
  )
}

CustomEventWrapper.propTypes = {
  event: PropTypes.object,
  colors: PropTypes.object,
}

export default CustomEventWrapper
