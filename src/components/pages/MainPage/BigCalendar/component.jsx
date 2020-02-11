import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import EditEventModal from '@/components/modals/EditEventModal'
import CreateFastEventModal from '@/components/modals/CreateFastEventModal'
import ChangeBlockedModal from '@/components/modals/ChangeBlocked'

import styles from './styles'

const localizer = momentLocalizer(moment)

const MyCalendar = ({ state, getEvents, getEvent, closeEvent, changeTrue }) => {
  const [dateForFastCreate, setDateForFastCreate] = useState()

  useEffect(() => {
    getEvents()
  }, [])

  const openEditDialog = event => {
    event.accessRole === 'owner' ? (
      getEvent({ recId: event.recurringEventId, id: event.key })
    ) : (
      changeTrue()
    )
  }

  const closeEditDialog = () => {
    closeEvent()
  }

  const openFastCreateOpen = data => {
    setDateForFastCreate(data)
  }

  const closeFastCreateOpen = () => {
    setDateForFastCreate(false)
  }

  return (
    <div>
      <Calendar
        className={css(styles.calendar)}
        localizer={localizer}
        startAccessor="start"
        events={state.events}
        eventPropGetter={event => ({
          style: {
            backgroundColor: event.color ? state.colors[event.color - 1].background : state.colors[0].background,
          },
        })}
        onSelectEvent={openEditDialog}
        onDrillDown={openFastCreateOpen}
        endAccessor="end" />
      <ChangeBlockedModal
        open={state.changeAbility} />
      <EditEventModal
        isOpen={!!state.eventsForChange.key}
        closeEditDialog={closeEditDialog} />
      <CreateFastEventModal
        open={!!dateForFastCreate}
        date={dateForFastCreate}
        closeFastCreateOpen={closeFastCreateOpen} />
    </div>
  )
}

MyCalendar.propTypes = {
  state: PropTypes.object,
  getEvents: PropTypes.func,
  getEvent: PropTypes.func,
  closeEvent: PropTypes.func,
  changeTrue: PropTypes.func,
}

export default MyCalendar
