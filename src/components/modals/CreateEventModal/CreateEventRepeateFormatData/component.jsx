import React from 'react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'
import { Select, TextField } from 'formik-material-ui'
import MenuItem from '@material-ui/core/MenuItem'
import DateFnsUtils from '@date-io/date-fns'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { KeyboardDatePicker } from 'formik-material-ui-pickers'

import { WEEKLY } from '@/constants'

import styles from './styles'

const CreateEventSetRepeatFormatData = ({
  repeatFormat,
  daysForRepeat,
  weekDays,
}) => {
  return (
    <div>
      <TextField
        label="Interval"
        name="interval"
        className={css(styles.textFields)}
        fullWidth />
      {
        repeatFormat === WEEKLY && (
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
                  {
                    console.log(day)
                  }
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
          name="endAfterDate"
          className={css(styles.endAfterDataInput)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }} />
      </MuiPickersUtilsProvider>
    </div>
  )
}

CreateEventSetRepeatFormatData.propTypes = {
  repeatFormat: PropTypes.string,
  daysForRepeat: PropTypes.array,
  weekDays: PropTypes.array,
}

export default CreateEventSetRepeatFormatData
