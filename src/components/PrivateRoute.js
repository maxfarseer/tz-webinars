import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthService from '../helpers/AuthService'

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(rest)
  return (
    <Route
      {...rest}
      render={props =>
        AuthService.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
