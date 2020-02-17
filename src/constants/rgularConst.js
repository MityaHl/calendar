export const afterDataForFastCreate = event => {
  return event.date.toISOString().replace(/[\\.|\-|\\:]/g, '').slice(0, 8)
}

export const dailyForFastCreate = afterData => {
  return 'RRULE:FREQ=DAILY;INTERVAL=1;UNTIL=' + afterData + 'T220000Z'
}

export const afterDateForCreate = event => {
  return event.endAfterDate.toISOString().replace(/[\\.|\-|\\:]/g, '').slice(0, 8)
}

export const weeklyForCreate = (event, afterData) => {
  return 'RRULE:FREQ=WEEKLY;BYDAY=' + event.daysForRepeat.join(',') +
   ';INTERVAL=' + event.interval + ';UNTIL=' + afterData + 'T220000Z'
}

export const dailyForCreate = (event, afterData) => {
  return 'RRULE:FREQ=DAILY;INTERVAL=' + event.interval + ';UNTIL=' + afterData + 'T220000Z'
}

export const weeklyForUpdate = values => {
  return 'RRULE:FREQ=WEEKLY;BYDAY=' + values.daysForRepeat.join(',') +
  ';INTERVAL=' + values.interval + ';UNTIL=' +
  values.endAfterDate.toISOString().replace(/[\\.|\-|\\:]/g, '').slice(0, 8) + 'T160000Z'
}

export const dailyForUpdate = values => {
  return 'RRULE:FREQ=DAILY;INTERVAL=' + values.interval + ';UNTIL=' +
  values.endAfterDate.toISOString().replace(/[\\.|\-|\\:]/g, '').slice(0, 8) + 'T160000Z'
}
