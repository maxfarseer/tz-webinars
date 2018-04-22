import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
  state = {
    redirectToPreviousRoute: false,
    username: '',
    password: '',
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state

    this.props.logIn(
      {
        username,
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

  render() {
    const { location, errorMsg } = this.props
    const { from } = location.state || { from: { pathname: '/' } }
    const { username, password, redirectToPreviousRoute } = this.state

    if (redirectToPreviousRoute) {
      return <Redirect to={from} />
    }

    return (
      <div>
        {errorMsg && <p>{errorMsg}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            data-field-name={'username'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Имя'}
            value={username}
          />
          <input
            data-field-name={'password'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Пароль'}
            value={password}
          />
          <button type="submit">Log in</button>
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
