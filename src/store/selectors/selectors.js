import { createSelector } from 'reselect'

const getLogin = state => state.login
const getColors = state => state.colors
const getRepeatFormat = state => state.repeatFormat
const getEvents = state => state.events
const getAbility = state => state.changeAbility
const getEventsForChange = state => state.eventsForChange
const getWeekDays = state => state.eventsForChange
const getSpinnerFromState = state => state.spinner

export const getSpinner = createSelector(
  [getSpinnerFromState],
  spinner => {
    return spinner
  }
)

export const getAllWeekDays = createSelector(
  [getWeekDays],
  weekDays => {
    return weekDays
  }
)

export const getUserLogin = createSelector(
  [getLogin],
  login => {
    return login
  }
)

export const getEventColors = createSelector(
  [getColors],
  colors => {
    return colors
  }
)

export const getRepeatTypes = createSelector(
  [getRepeatFormat],
  repeatTypes => {
    return repeatTypes
  }
)

export const getAllEvents = createSelector(
  [getEvents],
  events => {
    return events
  }
)

export const getChangeAbility = createSelector(
  [getAbility],
  ability => {
    return ability
  }
)

export const getEventForChange = createSelector(
  [getEventsForChange],
  event => {
    return event
  }
)
