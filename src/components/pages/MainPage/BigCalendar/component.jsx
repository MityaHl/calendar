import React, { useState, useEffect } from 'react'
import { css } from 'aphrodite'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import styles from './styles'

const localizer = momentLocalizer(moment)

const MyCalendar = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    window.gapi.client.calendar.events.list({
      calendarId: 'primary',
      timeMin: (new Date()).toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: 'startTime',
    }).then(response => {
      setEvents(response.result.items.map((item, index) => (
        {
          key: item.id,
          title: item.summary,
          start: new Date(item.start.dateTime),
          end: new Date(item.end.dateTime),
        }
      )))
    })
  }, [])

  console.log(events)

  return (
    <Calendar
      className={css(styles.calendar)}
      localizer={localizer}
      startAccessor="start"
      events={events}
      endAccessor="end" />
  )
}

export default MyCalendar
