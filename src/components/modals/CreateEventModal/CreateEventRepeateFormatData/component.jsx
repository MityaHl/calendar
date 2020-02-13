import React from 'react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import DateFnsUtils from '@date-io/date-fns'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

import { WEEKLY } from '@/constants'

import styles from './styles'

const CreateEventSetRepeatFormatData = ({
  interval,
  setInterval,
  repeatFormat,
  daysForRepeat,
  setDaysForRepeat,
  weekDays,
  endAfterDate,
  setEndAfterDate,
}) => {
  return (
    <div>
      <TextField
        label="Interval"
        value={interval}
        onChange={event => {
          setInterval(event.target.value)
        }}
        className={css(styles.textFields)}
        fullWidth />
      {
        repeatFormat === WEEKLY && (
          <FormControl className={css(styles.select)}>
            <InputLabel>Days for repeat</InputLabel>
            <Select
              multiple
              value={daysForRepeat}
              input={<Input />}
              className={css(styles.select)}
              onChange={event => {
                setDaysForRepeat(event.target.value)
              }}
              renderValue={selected => selected.join(', ')}
            >
              {weekDays.map((day, index) => (
                <MenuItem value={day} key={index}>
                  <Checkbox checked={daysForRepeat.indexOf(day) > -1} />
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
          value={endAfterDate}
          onChange={setEndAfterDate}
          className={css(styles.endAfterDataInput)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }} />
      </MuiPickersUtilsProvider>
    </div>
  )
}

CreateEventSetRepeatFormatData.propTypes = {
  interval: PropTypes.number,
  setInterval: PropTypes.func,
  repeatFormat: PropTypes.string,
  daysForRepeat: PropTypes.array,
  setDaysForRepeat: PropTypes.func,
  weekDays: PropTypes.array,
  setEndAfterDate: PropTypes.func,
  endAfterDate: PropTypes.object,
}

export default CreateEventSetRepeatFormatData
