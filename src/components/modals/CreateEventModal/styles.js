import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  button: {
    width: '50%',
    color: '#fff',
    borderColor: '#fff',
    '@media (max-width: 1100px)': {
      fontSize: '20px',
    },
    '@media (max-width: 700px)': {
      fontSize: '10px',
    },
  },
  label: {
    marginTop: '10px',
  },
})
