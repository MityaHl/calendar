import React, { useEffect } from 'react'
import { css } from 'aphrodite'
import axios from 'axios'
import Button from '@material-ui/core/Button'

import styles from './styles'

var event = {
  'summary': 'Google I/O 2015',
  'location': '800 Howard St., San Francisco, CA 94103',
  'description': 'A chance to hear more about Google\'s developer products.',
  'start': {
    'dateTime': '2020-01-30T09:00:00-07:00',
    'timeZone': 'America/Los_Angeles'
  },
  'end': {
    'dateTime': '2020-01-30T17:00:00-07:00',
    'timeZone': 'America/Los_Angeles'
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=1'
  ],
  
}

const addEv = () => {
  window.gapi.client.calendar.events
    .insert({
      'calendarId': 'primary',
      'resource': event,
    })
    .then(function (response) {
      console.log('Event Created')
    })
}

const signIn = () => {
  window.gapi.auth2.getAuthInstance().signIn().then(user => {
    console.log(window.gapi)
    console.log(user)
  })
}

const getCalendar = () => {
  window.gapi.client.calendar.events.list({
    calendarId: 'primary',
    timeMin: (new Date()).toISOString(),
    showDeleted: false,
    singleEvents: true,
    maxResults: 10,
    orderBy: 'startTime',
  }).then(response => console.log(response))
}

const MonthComponent = () => {
  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          apiKey: 'AIzaSyC0LlE4TTsGdXM2EKJ8Gpubjk3_ctIs_cc',
          clientId: '816106006496-qo93s99ofq2blmontijj9a41j3jifv6h.apps.googleusercontent.com',
          discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
          scope: 'https://www.googleapis.com/auth/calendar',
        })
        .then(() => {
          console.log('init Ok')
        })
    })
  })

  return (
    <div>
      <Button variant="contained" onClick={signIn}>
        SignIn
      </Button>
      <Button variant="contained" onClick={getCalendar}>
        cal
      </Button>
      <Button variant="contained" onClick={addEv}>
        add
      </Button>
    </div>
  )
}

export default MonthComponent
