import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ isAuth, component: Component, path }) => {
  return (
    <Route
      path={path}
      exact
      render={
        () => (isAuth
          ? (
            <Component />
          )
          : (
            <Redirect to="/login" />
          ))
      } />
  )
}

export default PrivateRoute
