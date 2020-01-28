import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/blocks/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}

export default App
