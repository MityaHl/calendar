import React from 'react'
import { css } from 'aphrodite'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { TextField } from 'formik-material-ui'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import CloseIcon from '@material-ui/icons/Close'
import { Formik } from 'formik'

import EditEventRepeateFormatData from './EditEventRepeatFormatData'
import EditEventModalSetDates from './EditEventModalSetDates'
import EditEventSetColor from './EditEventSetColor'

import styles from './styles'

const moment = require('moment')

const EditEventModal = ({ state, isOpen, closeEditDialog, onChangeEvent, onDeleteEvent }) => {
  const editEvent = values => {
    let recurrenceData = ''
    console.log(values.endAfterDate)
    if (state.eventsForChange.creator === state.login) {
      const weekly = 'RRULE:FREQ=WEEKLY;BYDAY=' + values.daysForRepeat.join(',') +
      ';INTERVAL=' + values.interval + ';UNTIL=' +
      values.endAfterDate.toISOString().replace(/[\\.|\-|\\:]/g, '').slice(0, 8) + 'T160000Z'
      const daily = 'RRULE:FREQ=DAILY;INTERVAL=' + values.interval + ';UNTIL=' +
      values.endAfterDate.toISOString().replace(/[\\.|\-|\\:]/g, '').slice(0, 8) + 'T160000Z'

      switch (values.repeatFormat) {
        case 'DAILY': recurrenceData = daily
          break
        case 'WEEKLY': recurrenceData = weekly
          break
      }
    }

    const newEvent = {
      id: values.id,
      summary: values.title,
      end: {
        //dateTime: moment(values.endDate).format(),
        dateTime: new Date(values.endDate).toISOString(),
        timeZone: 'America/Los_Angeles',

      },
      start: {
        //dateTime: moment(values.startDate).format(),
        dateTime: new Date(values.startDate).toISOString(),
        timeZone: 'America/Los_Angeles',

      },
      colorId: values.color + 1,
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

  let daysForRepeat = []
  let endAfterDate = ''
  if (state.eventsForChange.recurrence[3]) {
    daysForRepeat = state.eventsForChange.recurrence[3].split(',')
  }
  if (state.eventsForChange.creator === state.login &&
    state.eventsForChange.recurrence[0] !== '') {
    endAfterDate = state.eventsForChange.recurrence[1]
    endAfterDate = endAfterDate.slice(0, 4) + '/' +
    endAfterDate.slice(4, 6) + '/' + endAfterDate.slice(6, 8)
    endAfterDate = new Date(endAfterDate)
  }

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
              repeatFormat: state.eventsForChange.recurrence[0] || 'DAILY',
              interval: state.eventsForChange.recurrence[2] || 1,
              endAfterDate: endAfterDate || new Date(),
              daysForRepeat: daysForRepeat || [],
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
                <EditEventModalSetDates />
                <EditEventSetColor colors={state.colors} />
                {
                  state.eventsForChange.creator === state.login && (
                    <EditEventRepeateFormatData
                      weekDays={state.weekDays}
                      daysForRepeat={values.daysForRepeat}
                      repeatTypes={state.repeatFormat}
                      repeatFormat={values.repeatFormat} />
                  )
                }
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
                        editEvent(values)
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
  closeEditDialog: PropTypes.func,
  onChangeEvent: PropTypes.func,
  onDeleteEvent: PropTypes.func,
}

export default EditEventModal
