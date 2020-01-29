import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/blocks/Header'
import MonthComponent from './components/pages/MonthComponent'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MonthComponent />
    </BrowserRouter>
  )
}

export default App
