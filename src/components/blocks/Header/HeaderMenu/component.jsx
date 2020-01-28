import React, { useState } from 'react'
import { css } from 'aphrodite'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Link from '@material-ui/core/Link'

import styles from './styles'

const HeaderMenu = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="white"
      centered
    >
      <Tab
        label={
          <Link className={css(styles.link)}>Month</Link>
        }
        value={0} />
      <Tab
        label={
          <Link className={css(styles.link)}>Week</Link>
        }
        value={1} />
      <Tab
        label={
          <Link className={css(styles.link)}>Day</Link>
        }
        value={2} />
    </Tabs>
  )
}

export default HeaderMenu
