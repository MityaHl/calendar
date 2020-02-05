import React from 'react'
import { css } from 'aphrodite'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'

import styles from './styles'

const CreateEventModal = ({ state, onAddEvent }) => {
  const [open, setOpen] = React.useState(false)
  const [title, setTitle] = React.useState('')
  const [startDate, setStartDate] = React.useState(new Date())
  const [endDate, setEndDate] = React.useState(new Date())
  const [color, setColor] = React.useState(1)
  const [repeatFormat, setRepeateFormat] = React.useState(0)
  const [daysForRepeat, setDaysForRepeat] = React.useState([])
  const [daysInterval, setDaysInterval] = React.useState(1)
  const [hoursInterval, setHoursInterval] = React.useState(1)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const addEvent = () => {
    onAddEvent({
      title,
      startDate,
      endDate,
      color,
      repeatFormat,
      daysForRepeat,
      daysInterval,
      hoursInterval,
    })
    handleClose()
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Button
        variant="outlined"
        color="primary"
        className={css(styles.button)}
        onClick={handleClickOpen}
      >
        Create event
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create event, enter the following information...
          </DialogContentText>
          <TextField
            label="Title"
            type="text"
            value={title}
            onChange={event => {
              setTitle(event.target.value)
            }}
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
          <InputLabel className={css(styles.label)}>
            Color
          </InputLabel>
          <Select
            className={css(styles.select)}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={0}
            onChange={event => {
              setColor(event.target.value + 1)
            }}
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
            value={repeatFormat}
            onChange={event => [
              setRepeateFormat(event.target.value)
            ]}
          >
            {
              state.repeatFormat.map((format, index) => (
                <MenuItem key={index} value={index}>
                  {format}
                </MenuItem>
              ))
            }
          </Select>
          {
            repeatFormat === 0 && (
              <TextField
                label="Interval"
                value={hoursInterval}
                onChange={event => {
                  setHoursInterval(event.target.value)
                }}
                className={css(styles.textFields)}
                fullWidth />
            )
          }
          {
            repeatFormat === 1 && (
              <TextField
                label="Interval"
                value={daysInterval}
                onChange={event => {
                  setDaysInterval(event.target.value)
                }}
                className={css(styles.textFields)}
                fullWidth />
            )
          }
          {
            repeatFormat === 2 && (
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
                {state.weekDays.map((day, index) => (
                  <MenuItem value={day} key={index}>
                    <Checkbox checked={daysForRepeat.indexOf(day) > -1} />
                    <ListItemText primary={day} />
                  </MenuItem>
                ))}
              </Select>
            )
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addEvent} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}

export default CreateEventModal
