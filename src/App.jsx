import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Header from './components/blocks/Header'
import MainPage from './components/pages/MainPage'
import Login from './components/pages/LogIn'
import Spinner from './components/blocks/Spinner'

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
          const isAuthUser = window.gapi.auth2.getAuthInstance().isSignedIn.get()
          login(isAuthUser)
          getColors()
        })
    })
  }, [])

  const PrivateRoute = ({ isAuth, component: Component, path }) => (
    <Route
      path={path}
      render={
        props => (isAuth
          ? (
            <Component />
          )
          : (
            <Redirect to={{ pathname: '/' }} />
          ))
      } />
  )

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {
          state.spinner ? (<Spinner />) : (
            <div>
              {
                state.login === false ? (
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
            </div>
          )
        }
      </Switch>
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
