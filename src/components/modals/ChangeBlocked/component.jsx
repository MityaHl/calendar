import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContentText from '@material-ui/core/DialogContentText'

const ChangeBlockedModal = ({ open, changeFalse }) => {
  const setChangeBlockedFalse = () => {
    changeFalse(false)
  }

  return (
    <Dialog open={open} onClose={setChangeBlockedFalse}>
      <DialogTitle>Change blocked</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Something went wrong...
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={setChangeBlockedFalse} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

ChangeBlockedModal.propTypes = {
  open: PropTypes.bool,
  changeFalse: PropTypes.func,
}

export default ChangeBlockedModal
