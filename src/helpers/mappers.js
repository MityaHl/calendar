export const getEventsMapper = response => {
  return response.reduce((events, resp) => {
    return events.concat(resp.result.items.map((item, index) => (
      {
        key: item.id,
        title: item.summary,
        start: new Date(item.start.date || item.start.dateTime),
        end: new Date(item.end.date || item.end.dateTime),
        color: item.colorId || 1,
        recurringEventId: item.recurringEventId,
        creator: item.creator.email,
        accessRole: resp.result.accessRole,
      }
    )))
  }, [])
}

export const getOneEventMapper = response => {
  return {
    key: response.result.id,
    title: response.result.summary,
    start: new Date(response.result.start.dateTime || response.result.start.date),
    end: new Date(response.result.end.dateTime || response.result.end.date),
    color: response.result.colorId,
    creator: response.result.creator.email,
    recurrence: response.result.recurrence ? (
      response.result.recurrence[0].slice(6).split(';').map((item, index) => {
        return item.slice(item.indexOf('=') + 1)
      })
    ) : (
      [
        '',
      ]
    ),
  }
}

export const eventForFastCreate = event => {
  const afterData = event.date.toISOString().replace(/[\\.|\-|\\:]/g, '').slice(0, 8)
  const daily = 'RRULE:FREQ=DAILY;INTERVAL=1;UNTIL=' + afterData + 'T220000Z'

  return {
    summary: event.title,
    start: {
      dateTime: new Date(event.date).toISOString(),
      timeZone: 'America/Los_Angeles',
    },
    end: {
      dateTime: new Date(event.date).toISOString(),
      timeZone: 'America/Los_Angeles',
    },
    colorId: 1,
    recurrence: [
      daily,
    ],
  }
}

export const eventForCreate = event => {
  const afterData = event.endAfterDate.toISOString().replace(/[\\.|\-|\\:]/g, '').slice(0, 8)

  const weekly = 'RRULE:FREQ=WEEKLY;BYDAY=' + event.daysForRepeat.join(',') +
   ';INTERVAL=' + event.interval + ';UNTIL=' + afterData + 'T220000Z'
  const daily = 'RRULE:FREQ=DAILY;INTERVAL=' + event.interval + ';UNTIL=' + afterData + 'T220000Z'
  let recurrenceData = ''

  switch (event.repeatFormat) {
    case 'DAILY': recurrenceData = daily
      break
    case 'WEEKLY': recurrenceData = weekly
      break
    default: recurrenceData = daily
      break
  }

  return {
    summary: event.title,
    start: {
      dateTime: new Date(event.startDate).toISOString(),
      timeZone: 'America/Los_Angeles',
    },
    end: {
      dateTime: new Date(event.endDate).toISOString(),
      timeZone: 'America/Los_Angeles',
    },
    colorId: event.color,
    recurrence: [
      recurrenceData,
    ],
  }
}

export const fullEventForUpdate = data => {
  if (data.recurrence[0] === '') {
    return {
      id: data.id,
      summary: data.summary,
      end: {
        dateTime: new Date(data.end.dateTime).toISOString(),
        timeZone: 'America/Los_Angeles',
      },
      start: {
        dateTime: new Date(data.start.dateTime).toISOString(),
        timeZone: 'America/Los_Angeles',
      },
      colorId: data.colorId,
    }
  } else {
    return data
  }
}

export const eventForUpdateSaga = ({ values, recurrenceData }) => {
  return {
    id: values.id,
    summary: values.title,
    end: {
      dateTime: new Date(values.endDate).toISOString(),
      timeZone: 'America/Los_Angeles',

    },
    start: {
      dateTime: new Date(values.startDate).toISOString(),
      timeZone: 'America/Los_Angeles',

    },
    colorId: values.color + 1,
    recurrence: [
      recurrenceData,
    ],
  }
}

export const recurrenceDataForUpdate = values => {
  let recurrenceData = ''
  const weekly = 'RRULE:FREQ=WEEKLY;BYDAY=' + values.daysForRepeat.join(',') +
    ';INTERVAL=' + values.interval + ';UNTIL=' +
    values.endAfterDate.toISOString().replace(/[\\.|\-|\\:]/g, '').slice(0, 8) + 'T160000Z'
  const daily = 'RRULE:FREQ=DAILY;INTERVAL=' + values.interval + ';UNTIL=' +
    values.endAfterDate.toISOString().replace(/[\\.|\-|\\:]/g, '').slice(0, 8) + 'T160000Z'

  switch (values.repeatFormat) {
    case 'DAILY': recurrenceData = daily
      break
    case 'WEEKLY': recurrenceData = weekly
      break
    default: recurrenceData = daily
      break
  }

  return recurrenceData
}

export const endAfterDateForUpdate = recurrence => {
  let [, endAfterDate] = recurrence
  endAfterDate = endAfterDate.slice(0, 4) + '/' +
  endAfterDate.slice(4, 6) + '/' + endAfterDate.slice(6, 8)
  endAfterDate = new Date(endAfterDate)

  return endAfterDate
}
