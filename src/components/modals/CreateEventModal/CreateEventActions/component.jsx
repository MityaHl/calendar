import React from 'react'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const CreateEventButtons = ({ handleClose, addEvent, values }) => {
  return (
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Cancel
      </Button>
      <Button
        onClick={() => {
          addEvent(values)
        }}
        color="primary"
      >
        Create
      </Button>
    </DialogActions>
  )
}

CreateEventButtons.propTypes = {
  addEvent: PropTypes.func,
  handleClose: PropTypes.func,
  values: PropTypes.object,
}

export default CreateEventButtons
