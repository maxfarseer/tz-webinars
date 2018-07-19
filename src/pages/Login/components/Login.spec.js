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

  describe('Form handlers', () => {
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

    describe('when submiting the form', () => {
      beforeEach(() => {
        login.find('form').simulate('submit', {
          preventDefault: () => {},
        })
      })

      it('calls the props.logIn', () => {
        /* expect(mockLogin).toHaveBeenCalledWith(
          {
            email: 'max@test.com',
            password: '11',
          }
        ) */
        expect(mockLogin).toHaveBeenCalledTimes(1)
      })
    })
    describe('when clicking the Login button', () => {
      login.find('button').simulate('click', {
        preventDefault: () => {},
      })

      it('calls the props.logIn', () => {
        expect(mockLogin).toHaveBeenCalledTimes(1)
      })
    })

    afterAll(() => {
      login.setState(initialState)
    })
  })

  describe('disabled attr for submit button', () => {
    it('render form with disabled button at initial render', () => {
      const button = login.find('button')
      expect(button.prop('disabled')).toBeTruthy()
    })

    it('render form with disabled button for bad password', () => {
      const nextState = {
        ...initialState,
        password: 123,
        email: 'max@test.com',
      }
      login.setState(nextState)

      const button = login.find('button')
      expect(button.prop('disabled')).toBeTruthy()
    })

    it('render form with disabled button for bad email', () => {
      const nextState = {
        ...initialState,
        password: 12345,
        email: 'bademail',
      }
      login.setState(nextState)

      const button = login.find('button')
      expect(button.prop('disabled')).toBeTruthy()
    })

    it('render form with disabled button for bad email & password', () => {
      const nextState = {
        ...initialState,
        password: 1,
        email: 'bademail',
      }
      login.setState(nextState)

      const button = login.find('button')
      expect(button.prop('disabled')).toBeTruthy()
    })

    it('render form without disabled button, because email & password are correct', () => {
      const nextState = {
        ...initialState,
        email: 'max@test.com',
        password: '123456',
      }
      login.setState(nextState)

      const button = login.find('button')
      expect(button.prop('disabled')).toBeFalsy()
    })

    afterEach(() => {
      login.setState(initialState)
    })
  })
})
