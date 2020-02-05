import React from 'react'
import { css } from 'aphrodite'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { TextField, Select } from 'formik-material-ui'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { KeyboardDateTimePicker } from 'formik-material-ui-pickers'
import MenuItem from '@material-ui/core/MenuItem'
import { Formik } from 'formik'

import styles from './styles'

const moment = require('moment')

const EditEventModal = ({ state, isOpen, event, closeEditDialog, onChangeEvent, onDeleteEvent }) => {

  const editEvent = (id, title, startDate, endDate, color) => {
    const newEvent = {
      id: event.key,
      summary: title,
      end: {
        dateTime: moment(endDate).format(),
      },
      start: {
        dateTime: moment(startDate).format(),
      },
      colorId: color + 1,
    }
    onChangeEvent(newEvent)
    closeEditDialog()
  }

  const deleteEvent = event => {
    onDeleteEvent(event.key)
    closeEditDialog()
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Dialog open={isOpen} onClose={closeEditDialog}>
        <DialogTitle>Edit event</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              id: event.key,
              title: event.title,
              startDate: event.start,
              endDate: event.end,
              color: event.color - 1 || 0,
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
                        deleteEvent(event)
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

export default EditEventModal
