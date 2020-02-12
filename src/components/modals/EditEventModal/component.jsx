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

import {
  eventForUpdateSaga,
  recurrenceDataForUpdate,
  endAfterDateForUpdate,
} from '@/helpers/mappers'

const EditEventModal = ({ state, isOpen, closeEditDialog, onChangeEvent, onDeleteEvent }) => {
  const editEvent = values => {
    let recurrenceData = ''
    if (state.eventsForChange.creator === state.login) {
      recurrenceData = recurrenceDataForUpdate(values)
    }

    const newEvent = eventForUpdateSaga({ values, recurrenceData })
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
    endAfterDate = endAfterDateForUpdate(state.eventsForChange.recurrence)
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
