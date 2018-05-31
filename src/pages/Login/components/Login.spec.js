import React from 'react'
import { shallow } from 'enzyme'
import Login from './Login'

describe('Login', () => {
  const mockLogin = jest.fn()

  const initialState = {
    email: '',
    password: '',
    redirectToPreviousRoute: false,
  }

  const props = {
    location: { state: { from: '/' } },
    logIn: mockLogin,
    errorMsg: null,
  }
  const login = shallow(<Login {...props} />)

  it('renders properly', () => {
    expect(login).toMatchSnapshot()
  })

  it('initialize Login with initial state', () => {
    expect(login.state()).toEqual(initialState)
  })

  describe('when typing into email input', () => {
    const email = 'max@test.com'

    beforeEach(() => {
      login.find('[data-field-name="email"]').simulate('change', {
        currentTarget: {
          value: email,
          dataset: {
            fieldName: 'email',
          },
        },
      })
    })

    it('updates email field in state', () => {
      expect(login.state().email).toEqual(email)
    })
  })

  describe('when typing into password input', () => {
    const password = '11'

    beforeEach(() => {
      login.find('[data-field-name="password"]').simulate('change', {
        currentTarget: {
          value: password,
          dataset: {
            fieldName: 'password',
          },
        },
      })
    })

    it('updates password field in state', () => {
      expect(login.state().password).toEqual(password)
    })
  })

  describe('when clicking the Login button', () => {
    beforeEach(() => {
      login.find('form').simulate('submit', {
        preventDefault() {},
      })
    })

    it('calls the login callback', () => {
      /* expect(mockLogin).toHaveBeenCalledWith(
        {
          email: 'max@test.com',
          password: '11',
        },
        () => {}
      ) */
      expect(mockLogin).toHaveBeenCalled(1)
    })
  })
})
