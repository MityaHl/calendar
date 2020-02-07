import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  button: {
    color: '#fff',
    borderColor: '#fff',
    '@media (max-width: 1100px)': {
      fontSize: '20px',
    },
    '@media (max-width: 700px)': {
      fontSize: '10px',
    },
  },
})
