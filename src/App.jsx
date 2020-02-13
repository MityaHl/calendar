import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/blocks/Header'
import MainPage from './components/pages/MainPage'
import Login from './components/pages/LogIn'
import Spinner from './components/blocks/Spinner'
import PrivateRoute from './helpers/PrivateRoute'

const App = ({ login, onLoad, spinner, getColors, closeSpinner, loginData }) => {
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
          closeSpinner()
          const isAuthUser = window.gapi.auth2.getAuthInstance().currentUser.get().w3.U3
          login(isAuthUser)
          getColors()
        })
    })
  }, [])

  // useEffect(() => {
  //   onLoad()
  // }, [])

  return (
    <BrowserRouter>
      <Header />
      {
        spinner
          ? (<Spinner />)
          : (
            <Switch>
              <Route path="/login" exact component={Login} />
              <PrivateRoute isAuth={!!loginData} component={MainPage} path="/" />
            </Switch>
          )
      }
    </BrowserRouter>
  )
}

App.propTypes = {
  loginData: PropTypes.string,
  spinner: PropTypes.bool,
  onLoad: PropTypes.func,
  login: PropTypes.func,
  getColors: PropTypes.func,
  closeSpinner: PropTypes.func,
}

export default App
