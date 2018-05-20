import React from 'react'
import { shallow } from 'enzyme'
import NotFound from './NotFound'

describe('NotFound', () => {
  const notFound = shallow(<NotFound />)

  it('renders properly', () => {
    expect(notFound).toMatchSnapshot()
  })

  it('contains a not found header', () => {
    expect(notFound.find('h2').text()).toEqual('Страница не найдена')
  })

  it('contains info text', () => {
    expect(notFound.find('p').text()).toEqual('Попробуйте... (ссылки)')
  })
})
