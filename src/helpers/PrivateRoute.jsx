import React from 'react'
import PropTypes from 'prop-types'
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

PrivateRoute.defaultTypes = {
  component: null,
}

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool,
  component: PropTypes.func,
  path: PropTypes.string,
}

export default PrivateRoute
