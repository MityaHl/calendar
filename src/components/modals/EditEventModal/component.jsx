import React from 'react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { TextField, Select } from 'formik-material-ui'
import Checkbox from '@material-ui/core/Checkbox'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { KeyboardDateTimePicker, KeyboardDatePicker } from 'formik-material-ui-pickers'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import ListItemText from '@material-ui/core/ListItemText'
import CloseIcon from '@material-ui/icons/Close'
import Input from '@material-ui/core/Input'
import { Formik } from 'formik'

import styles from './styles'

const moment = require('moment')

const EditEventModal = ({ state, isOpen, closeEditDialog, onChangeEvent, onDeleteEvent }) => {
  const editEvent = (
    id,
    title,
    startDate,
    endDate,
    color,
    repeatFormat,
    interval,
    endAfterDate,
    daysForRepeat
  ) => {
    console.log(endAfterDate)
    const weekly = 'RRULE:FREQ=WEEKLY;BYDAY=' + daysForRepeat.join(',') + ';INTERVAL=' + interval +
     ';UNTIL=' + endAfterDate.toISOString().replace(/[.]/g, '').replace(/[-]/g, '').replace(/[:]/g, '').slice(0, 8) + 'T220000Z'
    const daily = 'RRULE:FREQ=DAILY;INTERVAL=' + interval + ';UNTIL=' +
    endAfterDate.toISOString().replace(/[.]/g, '').replace(/[-]/g, '').replace(/[:]/g, '').slice(0, 8) + 'T220000Z'
    let recurrenceData = ''

    switch (repeatFormat) {
      case 'DAILY': recurrenceData = daily
        break
      case 'WEEKLY': recurrenceData = weekly
        break
    }

    const newEvent = {
      id: id,
      summary: title,
      end: {
        dateTime: moment(endDate).format(),
      },
      start: {
        dateTime: moment(startDate).format(),
      },
      colorId: color + 1,
      recurrence: [
        recurrenceData,
      ],
    }
    onChangeEvent(newEvent)
    closeEditDialog()
  }

  const deleteEvent = () => {
    onDeleteEvent(state.eventsForChange.key)
    closeEditDialog()
  }

  let endAfterDate = state.eventsForChange.recurrence[1]
  let daysForRepeat = []
  if (state.eventsForChange.recurrence[3]) {
    daysForRepeat = state.eventsForChange.recurrence[3].split(',')
  }
  endAfterDate = endAfterDate.slice(0, 4) + '/' +
  endAfterDate.slice(4, 6) + '/' + endAfterDate.slice(6, 8)
  endAfterDate = new Date(endAfterDate)
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Dialog open={isOpen} onClose={closeEditDialog}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={11}>
            <DialogTitle>Edit event</DialogTitle>
          </Grid>
          <Grid
            item
            xs={1}
            container
            direction="row"
            justify="flex-end"
          >
            <Button onClick={closeEditDialog} color="primary">
              <CloseIcon />
            </Button>
          </Grid>
        </Grid>
        <DialogContent>
          <Formik
            initialValues={{
              id: state.eventsForChange.key,
              title: state.eventsForChange.title,
              startDate: state.eventsForChange.start,
              endDate: state.eventsForChange.end,
              color: state.eventsForChange.color - 1 || 0,
              repeatFormat: state.eventsForChange.recurrence[0],
              interval: state.eventsForChange.recurrence[2],
              endAfterDate: endAfterDate,
              daysForRepeat: daysForRepeat,
            }}
          >
            {({
              values,
            }) => (
              <form>
                <TextField
                  label="Title"
                  type="text"
                  name="title"
                  fullWidth />
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
                      name="startDate"
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }} />
                    <KeyboardDateTimePicker
                      disableToolbar
                      variant="inline"
                      format="yyyy/MM/dd hh:mm a"
                      margin="normal"
                      label="End date"
                      name="endDate"
                      className={css(styles.endDataInput)}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }} />
                  </Grid>
                </MuiPickersUtilsProvider>
                <Select
                  className={css(styles.select)}
                  name="color"
                >
                  {
                    state.colors.map((color, index) => (
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
                <Select
                  className={css(styles.select)}
                  name="repeatFormat"
                >
                  {
                    state.repeatFormat.map((format, index) => (
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
                  values.repeatFormat === 'WEEKLY' && (
                    <FormControl className={css(styles.select)}>
                      <InputLabel>Days for repeat</InputLabel>
                      <Select
                        multiple
                        name="daysForRepeat"
                        input={<Input />}
                        className={css(styles.select)}
                        renderValue={selected => selected.join(', ')}
                      >
                        {state.weekDays.map((day, index) => (
                          <MenuItem value={day} key={index}>
                            <Checkbox checked={values.daysForRepeat.indexOf(day) !== -1} />
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
                <Grid
                  container
                  direction="row"
                  className={css(styles.grid)}
                >
                  <Grid
                    item
                    xs={3}
                    container
                    justify="flex-start"
                  >
                    <Button
                      color="secondary"
                      onClick={() => {
                        deleteEvent()
                      }}
                    >
                      Delete event
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={9}
                    container
                    justify="flex-end"
                  >
                    <Button
                      color="primary"
                      onClick={closeEditDialog}
                    >
                      Cancel
                    </Button>
                    <Button
                      color="primary"
                      onClick={() => {
                        editEvent(
                          values.id,
                          values.title,
                          values.startDate,
                          values.endDate,
                          values.color,
                          values.repeatFormat,
                          values.interval,
                          values.endAfterDate,
                          values.daysForRepeat
                        )
                      }}
                    >
                      Edit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </Grid>
  )
}

EditEventModal.propTypes = {
  state: PropTypes.object,
  isOpen: PropTypes.bool,
  closeEditDialog: PropTypes.object,
  onChangeEvent: PropTypes.object,
  onDeleteEvent: PropTypes.object,
}

export default EditEventModal
