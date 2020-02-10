import React from 'react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import InputLabel from '@material-ui/core/InputLabel'
import CloseIcon from '@material-ui/icons/Close'

import CreateEventButtons from './CreateEventActions'
import CreateEventDates from './CreateEventDates'
import CreateEventSetColor from './CreateEventSetColor'
import CreateEventSetRepeatFormat from './CreateEventSetRepeatFormat'
import CreateEventRepeateFormatData from './CreateEventRepeateFormatData'

import styles from './styles'

const CreateEventModal = ({ state, onAddEvent }) => {
  const [open, setOpen] = React.useState(false)
  const [title, setTitle] = React.useState('')
  const [startDate, setStartDate] = React.useState(new Date())
  const [endDate, setEndDate] = React.useState(new Date())
  const [color, setColor] = React.useState(1)
  const [repeatFormat, setRepeateFormat] = React.useState('DAILY')
  const [daysForRepeat, setDaysForRepeat] = React.useState([])
  const [interval, setInterval] = React.useState(1)
  const [endAfterDate, setEndAfterDate] = React.useState(new Date())

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setTitle('')
    setStartDate(new Date())
    setEndDate(new Date())
    setColor(1)
    setRepeateFormat('DAILY')
    setDaysForRepeat([])
    setInterval(1)
    setEndAfterDate(new Date())
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
      interval,
      endAfterDate,
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
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={11}>
            <DialogTitle>Create event</DialogTitle>
          </Grid>
          <Grid
            item
            xs={1}
            container
            direction="row"
            justify="flex-end"
          >
            <Button onClick={handleClose} color="primary">
              <CloseIcon />
            </Button>
          </Grid>
        </Grid>
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
          <CreateEventDates
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate} />
          <InputLabel className={css(styles.label)}>
            Color
          </InputLabel>
          <CreateEventSetColor
            colors={state.colors}
            setColor={setColor} />
          <CreateEventSetRepeatFormat
            repeatFormat={repeatFormat}
            setRepeateFormat={setRepeateFormat} />
          <CreateEventRepeateFormatData
            interval={interval}
            setInterval={setInterval}
            repeatFormat={repeatFormat}
            daysForRepeat={daysForRepeat}
            setDaysForRepeat={setDaysForRepeat}
            weekDays={state.weekDays}
            endAfterDate={endAfterDate}
            setEndAfterDate={setEndAfterDate} />
        </DialogContent>
        <CreateEventButtons
          handleClose={handleClose}
          addEvent={addEvent} />
      </Dialog>
    </Grid>
  )
}

CreateEventModal.propTypes = {
  state: PropTypes.object,
  onAddEvent: PropTypes.func,
}

export default CreateEventModal
