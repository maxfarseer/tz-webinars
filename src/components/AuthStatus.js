import React from 'react'
import AuthService from '../helpers/AuthService'
import { withRouter } from 'react-router'

const AuthStatus = withRouter(
  ({ history }) =>
    AuthService.isAuthenticated ? (
      <p>
        Welcome!{' '}
        <button
          onClick={() => {
            AuthService.logout(() => history.push('/'))
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
)

export default AuthStatus
