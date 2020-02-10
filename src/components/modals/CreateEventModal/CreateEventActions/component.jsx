import React from 'react'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const CreateEventButtons = ({ handleClose, addEvent }) => {
  return (
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Cancel
      </Button>
      <Button onClick={addEvent} color="primary">
        Create
      </Button>
    </DialogActions>
  )
}

CreateEventButtons.propTypes = {
  addEvent: PropTypes.func,
  handleClose: PropTypes.func,
}

export default CreateEventButtons
