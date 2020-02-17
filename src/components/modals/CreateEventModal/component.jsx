import React, { useState } from 'react'
import { css } from 'aphrodite'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { TextField } from 'formik-material-ui'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
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

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(constants.defaultOpen)
  }

  const addEvent = values => {
    onAddEvent({
      title: values.title,
      startDate: values.startDate,
      endDate: values.endDate,
      color: values.color + 1,
      repeatFormat: values.repeatFormat,
      daysForRepeat: values.daysForRepeat,
      interval: values.interval,
      endAfterDate: values.endAfterDate,
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
          <Formik
            initialValues={{
              title: constants.defaultTitle,
              startDate: constants.defaultStartDate,
              endDate: constants.defaultEndDate,
              color: 0,
              repeatFormat: constants.defaultRepeateFormat,
              interval: constants.defaultInterval,
              endAfterDate: constants.defaultEndAfterDate,
              daysForRepeat: constants.defaultDaysForRepeat,
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
                <CreateEventDates
                  startDate="startDate"
                  endDate="endDate" />
                <InputLabel className={css(styles.label)}>
                  Color
                </InputLabel>
                <CreateEventSetColor
                  colors={colors} />
                <CreateEventSetRepeatFormat />
                <CreateEventRepeateFormatData
                  repeatFormat={values.repeatFormat}
                  daysForRepeat={values.daysForRepeat}
                  weekDays={weekDays} />
                <CreateEventButtons
                  values={values}
                  handleClose={handleClose}
                  addEvent={addEvent} />
              </form>
            )}
          </Formik>
        </DialogContent>
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
