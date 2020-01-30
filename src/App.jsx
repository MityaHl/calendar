import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/blocks/Header'
import MainPage from './components/pages/MainPage'
import Login from './components/pages/LogIn'

const App = ({ state }) => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {
          state.login === '' ? (
            <div>
              <Route path="/" exact component={Login} />
              <Redirect to="/" />
            </div>
          ) : (
            <div>
              <Route path="/calendar" component={MainPage} />
              <Redirect to="/calendar" />
            </div>
          )
        }
      </Switch>
    </BrowserRouter>
  )
}

export default App
