import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { testPassword, testEmail } from '../../../helpers/inputs'

class Login extends React.Component {
  state = {
    redirectToPreviousRoute: false,
    email: '',
    password: '',
  }

  handleSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state

    this.props.logIn(
      {
        email,
        password,
      },
      () => {
        this.setState({ redirectToPreviousRoute: true })
      }
    )
  }

  handleChange = e => {
    const value = e.currentTarget.value
    const fieldName = e.currentTarget.dataset.fieldName

    this.setState(prev => ({
      ...prev,
      [fieldName]: value,
    }))
  }

  validate = () => {
    const { email, password } = this.state
    if (!testPassword(password)) {
      return false
    }
    if (!testEmail(email)) {
      return false
    }
    return true
  }

  render() {
    const { location, errorMsg } = this.props
    const { from } = location.state || { from: { pathname: '/' } }
    const { email, password, redirectToPreviousRoute } = this.state

    if (redirectToPreviousRoute) {
      return <Redirect to={from} />
    }

    return (
      <div>
        {errorMsg && <p>{errorMsg}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            data-field-name={'email'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'e-mail'}
            value={email}
          />
          <input
            data-field-name={'password'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Пароль'}
            value={password}
          />
          <button disabled={!this.validate()} type="submit">
            Log in
          </button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
}

export default Login
