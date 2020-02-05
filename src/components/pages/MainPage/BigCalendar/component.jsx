import React, { useEffect, useState } from 'react'
import { css } from 'aphrodite'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import EditEventModal from '@/components/modals/EditEventModal'

import styles from './styles'

const localizer = momentLocalizer(moment)

const MyCalendar = ({ state, getEvents, onDeleteEvent }) => {
  const [event, setEvent] = useState({})

  useEffect(() => {
    getEvents()
  }, [])

  const deleteEvent = event => {
    onDeleteEvent(event.key)
  }

  const openEditDialog = event => {
    setEvent(event)
  }

  const closeEditDialog = () => {
    setEvent({})
  }

  return (
    <div>
      <Calendar
        className={css(styles.calendar)}
        localizer={localizer}
        startAccessor="start"
        events={state.events}
        onSelectEvent={openEditDialog}
        endAccessor="end" />
      <EditEventModal
        isOpen={!!event.title}
        event={event}
        closeEditDialog={closeEditDialog} />
    </div>
  )
}

export default MyCalendar
