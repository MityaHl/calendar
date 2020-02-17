import * as constants from '@/constants/createEventConstants'

export const initialState = {
  title: constants.defaultTitle,
  startDate: constants.defaultStartDate,
  endDate: constants.defaultEndDate,
  color: constants.defaultColor,
  repeatFormat: constants.defaultRepeateFormat,
  daysForRepeat: constants.defaultDaysForRepeat,
  interval: constants.defaultInterval,
  endAfterDate: constants.defaultEndAfterDate,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setTitle':
      return { ...state, ...{ title: action.payload } }
    case 'setStartDate':
      return { ...state, ...{ startDate: action.payload } }
    case 'setEndDate':
      return { ...state, ...{ endDate: action.payload } }
    case 'setColor':
      return { ...state, ...{ color: action.payload } }
    case 'setInterval':
      return { ...state, ...{ interval: action.payload } }
    case 'setRepeateFormat':
      return { ...state, ...{ repeatFormat: action.payload } }
    case 'setEndAfterDate':
      return { ...state, ...{ endAfterDate: action.payload } }
    case 'setDaysForRepeat':
      return { ...state, ...{ daysForRepeat: action.payload } }
    default:
      throw new Error()
  }
}

// export const setDaysForRepeat = event => {
//   dispatch({
//     type: 'setDaysForRepeat',
//     payload: event.target.value,
//   })
// }
// export const setConstDaysForRepeat = () => {
//   dispatch({
//     type: 'setDaysForRepeat',
//     payload: constants.defaultDaysForRepeat,
//   })
// }
// export const setEndAfterDate = date => {
//   dispatch({
//     type: 'setEndAfterDate',
//     payload: date,
//   })
// }
// export const setConstEndAfterDate = () => {
//   dispatch({
//     type: 'setEndAfterDate',
//     payload: constants.defaultEndAfterDate,
//   })
// }
// export const setRepeateFormat = format => {
//   dispatch({
//     type: 'setRepeateFormat',
//     payload: format.target.value,
//   })
// }
// export const setConstRepeateFormat = () => {
//   dispatch({
//     type: 'setRepeateFormat',
//     payload: constants.defaultRepeateFormat,
//   })
// }
// export const setInterval = event => {
//   dispatch({
//     type: 'setInterval',
//     payload: event.target.value,
//   })
// }
// export const setConstInterval = () => {
//   dispatch({
//     type: 'setInterval',
//     payload: constants.defaultInterval,
//   })
// }
// export const setStartDate = date => {
//   dispatch({
//     type: 'setStartDate',
//     payload: date,
//   })
// }
// export const setConstStartDate = () => {
//   dispatch({
//     type: 'setStartDate',
//     payload: constants.defaultStartDate,
//   })
// }

// export const setEndDate = date => {
//   dispatch({
//     type: 'setEndDate',
//     payload: date,
//   })
// }

// export const setConstEndDate = () => {
//   dispatch({
//     type: 'setEndDate',
//     payload: constants.defaultEndDate,
//   })
// }

// export const setTitle = event => {
//   dispatch({
//     type: 'setTitle',
//     payload: event.target.value || constants.defaultTitle,
//   })
// }

// export const setConstTitle = () => {
//   dispatch({
//     type: 'setTitle',
//     payload: constants.defaultTitle,
//   })
// }

// export const setColor = event => {
//   dispatch({
//     type: 'setColor',
//     payload: event.target.value + 1 || constants.defaultColor,
//   })
// }

// export const setConstColor = () => {
//   dispatch({
//     type: 'setColor',
//     payload: constants.defaultColor,
//   })
// }
