import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Header from './components/blocks/Header'
import MainPage from './components/pages/MainPage'
import Login from './components/pages/LogIn'
import Spinner from './components/blocks/Spinner'
import PrivateRoute from './helpers/PrivateRoute'

const App = ({ state, login, spinner, getColors }) => {
  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          apiKey: 'AIzaSyC0LlE4TTsGdXM2EKJ8Gpubjk3_ctIs_cc',
          clientId: '816106006496-qo93s99ofq2blmontijj9a41j3jifv6h.apps.googleusercontent.com',
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
          scope: 'https://www.googleapis.com/auth/calendar',
        })
        .then(() => {
          spinner()
          const isAuthUser = window.gapi.auth2.getAuthInstance().currentUser.get().w3.U3
          console.log(isAuthUser)
          login(isAuthUser)
          getColors()
        })
    })
  }, [])

  return (
    <BrowserRouter>
      <Header />
      {
        state.spinner ? (<Spinner />) : (
          <Switch>
            <Route path="/login" exact component={Login} />
            <PrivateRoute isAuth={state.login} component={MainPage} path="/" />
          </Switch>
        )
      }
    </BrowserRouter>
  )
}

App.propTypes = {
  state: PropTypes.object,
  login: PropTypes.func,
  spinner: PropTypes.func,
  getColors: PropTypes.func,
}

export default App
