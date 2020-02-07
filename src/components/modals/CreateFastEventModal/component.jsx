import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContentText from '@material-ui/core/DialogContentText'
import TextField from '@material-ui/core/TextField'

const CreateFastEventModal = ({ open, closeFastCreateOpen, onAddFastEvent, date }) => {
  const [title, setTitle] = React.useState('')

  const addFastEvent = () => {
    onAddFastEvent({ title, date })
    closeFastCreateOpen()
  }

  return (
    <Dialog open={open} onClose={closeFastCreateOpen}>
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
      </DialogContent>
      <DialogActions>
        <Button onClick={closeFastCreateOpen} color="primary">
          Cancel
        </Button>
        <Button onClick={addFastEvent} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  )
}

CreateFastEventModal.propTypes = {
  open: PropTypes.bool,
  closeFastCreateOpen: PropTypes.func,
  onAddFastEvent: PropTypes.func,
  date: PropTypes.string,
}

export default CreateFastEventModal
