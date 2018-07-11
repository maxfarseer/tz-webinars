import React from 'react'
import { shallow } from 'enzyme'
import NewsList from './NewsList'

describe('NewsList', () => {
  const props = {
    data: [
      {
        id: 1,
        title: 'a',
        text: 'b',
      },
      {
        id: 2,
        title: 'a2',
        text: 'b2',
      },
    ],
  }
  const newsList = shallow(<NewsList {...props} />)

  it('renders properly', () => {
    expect(newsList).toMatchSnapshot()
  })

  it('renders 2 news', () => {
    expect(newsList.find('div.news-item')).toHaveLength(2)
  })

  describe('correct render for first news', () => {
    it('title', () => {
      expect(
        newsList
          .find('h3')
          .first()
          .text()
      ).toEqual(props.data[0].title)
    })

    it('info', () => {
      expect(
        newsList
          .find('div.news-item')
          .first()
          .find('p')
          .first()
          .text()
      ).toEqual(props.data[0].text)
    })
  })
})
