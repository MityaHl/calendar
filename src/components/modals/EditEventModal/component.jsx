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
import { DAILY } from '@/constants'

const EditEventModal = ({
  eventsForChange,
  login,
  colors,
  weekDays,
  repeatTypes,
  isOpen,
  closeEditDialog,
  onChangeEvent,
  onDeleteEvent,
}) => {
  const editEvent = values => {
    let recurrenceData = ''
    if (eventsForChange.creator === login) {
      recurrenceData = recurrenceDataForUpdate(values)
    }

    const newEvent = eventForUpdateSaga({ values, recurrenceData })
    onChangeEvent(newEvent)
    closeEditDialog()
  }

  const deleteEvent = () => {
    onDeleteEvent(eventsForChange.key)
    closeEditDialog()
  }

  let daysForRepeat = []
  let endAfterDate = ''

  if (eventsForChange.recurrence.days) {
    daysForRepeat = eventsForChange.recurrence.days.split(',')
  }
  if (eventsForChange.creator === login &&
    eventsForChange.recurrence.format !== '') {
    endAfterDate = endAfterDateForUpdate(eventsForChange.recurrence.date)
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
              id: eventsForChange.key,
              title: eventsForChange.title,
              startDate: eventsForChange.start,
              endDate: eventsForChange.end,
              color: eventsForChange.color - 1 || 0,
              repeatFormat: eventsForChange.recurrence[0] || DAILY,
              interval: eventsForChange.recurrence[2] || 1,
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
                <EditEventSetColor colors={colors} />
                {
                  eventsForChange.creator === login && (
                    <EditEventRepeateFormatData
                      weekDays={weekDays}
                      daysForRepeat={values.daysForRepeat}
                      repeatTypes={repeatTypes}
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
  eventsForChange: PropTypes.object,
  login: PropTypes.string,
  colors: PropTypes.array,
  weekDays: PropTypes.array,
  repeatTypes: PropTypes.array,
  isOpen: PropTypes.bool,
  closeEditDialog: PropTypes.func,
  onChangeEvent: PropTypes.func,
  onDeleteEvent: PropTypes.func,
}

export default EditEventModal
