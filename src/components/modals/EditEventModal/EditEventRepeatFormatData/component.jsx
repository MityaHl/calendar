import React from 'react'
import { css } from 'aphrodite'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import { TextField, Select } from 'formik-material-ui'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { KeyboardDatePicker } from 'formik-material-ui-pickers'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import DateFnsUtils from '@date-io/date-fns'

import styles from './styles'

const EditEventRepeateFormatData = ({ weekDays, daysForRepeat, repeatTypes, repeatFormat }) => {
  return (
    <div>
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
      <TextField
        label="Interval"
        name="interval"
        className={css(styles.textFields)}
        fullWidth />
      {
        repeatFormat === 'WEEKLY' && (
          <FormControl className={css(styles.select)}>
            <InputLabel>Days for repeat</InputLabel>
            <Select
              multiple
              name="daysForRepeat"
              input={<Input />}
              className={css(styles.select)}
              renderValue={selected => selected.join(', ')}
            >
              {weekDays.map((day, index) => (
                <MenuItem value={day} key={index}>
                  <Checkbox checked={daysForRepeat.indexOf(day) !== -1} />
                  <ListItemText primary={day} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )
      }
      <MuiPickersUtilsProvider
        utils={DateFnsUtils}
        className={css(styles.textFields)}
      >
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd"
          margin="normal"
          label="Repeate till"
          name="endAfterDate"
          className={css(styles.endAfterDataInput)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }} />
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default EditEventRepeateFormatData
