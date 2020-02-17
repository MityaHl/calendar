import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  title: {
    fontSize: '30px',
    '@media (max-width: 1100px)': {
      fontSize: '20px',
    },
    '@media (max-width: 700px)': {
      fontSize: '15px',
    },
  },
})
