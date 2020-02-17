import React from 'react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { KeyboardDateTimePicker } from 'formik-material-ui-pickers'
import Grid from '@material-ui/core/Grid'

import styles from './styles'

const CreateEventDates = ({ startDate, endDate }) => {
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
          name={startDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }} />
        <KeyboardDateTimePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd hh:mm a"
          margin="normal"
          label="End date"
          name={endDate}
          className={css(styles.endDataInput)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }} />
      </Grid>
    </MuiPickersUtilsProvider>
  )
}

CreateEventDates.propTypes = {
  startDate: PropTypes.object,
  endDate: PropTypes.object,
}

CreateEventDates.defaultProps = {
  startDate: null,
  endDate: undefined,
}

export default CreateEventDates
