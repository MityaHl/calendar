import React from 'react'
import { css } from 'aphrodite'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from '@material-ui/pickers'
import Grid from '@material-ui/core/Grid'

import styles from './styles'

const CreateEventDates = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <MuiPickersUtilsProvider
      utils={DateFnsUtils}
      className={css(styles.textFields)}
    >
      <Grid container justify="space-around">
        <KeyboardDateTimePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd hh:mm a"
          margin="normal"
          label="Start date"
          value={startDate}
          onChange={setStartDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }} />
        <KeyboardDateTimePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd hh:mm a"
          margin="normal"
          label="End date"
          value={endDate}
          onChange={setEndDate}
          className={css(styles.endDataInput)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }} />
      </Grid>
    </MuiPickersUtilsProvider>
  )
}

export default CreateEventDates