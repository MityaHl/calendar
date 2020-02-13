import React, { useState } from 'react'
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

import * as constants from '@/constants/createEventConstants'

import styles from './styles'

const CreateEventModal = ({ colors, weekDays, onAddEvent }) => {
  const [open, setOpen] = useState(constants.defaultOpen)
  const [title, setTitle] = useState(constants.defaultTitle)
  const [startDate, setStartDate] = useState(constants.defaultStartDate)
  const [endDate, setEndDate] = useState(constants.defaultEndDate)
  const [color, setColor] = useState(constants.defaultColor)
  const [repeatFormat, setRepeateFormat] = useState(constants.defaultRepeateFormat)
  const [daysForRepeat, setDaysForRepeat] = useState(constants.defaultDaysForRepeat)
  const [interval, setInterval] = useState(constants.defaultInterval)
  const [endAfterDate, setEndAfterDate] = useState(constants.defaultEndAfterDate)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setTitle(constants.defaultTitle)
    setStartDate(constants.defaultStartDate)
    setEndDate(constants.defaultEndDate)
    setColor(constants.defaultColor)
    setRepeateFormat(constants.defaultRepeateFormat)
    setDaysForRepeat(constants.defaultDaysForRepeat)
    setInterval(constants.defaultInterval)
    setEndAfterDate(constants.defaultEndAfterDate)
    setOpen(constants.defaultOpen)
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
            colors={colors}
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
            weekDays={weekDays}
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
  colors: PropTypes.array,
  weekDays: PropTypes.array,
  onAddEvent: PropTypes.func,
}

export default CreateEventModal
