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

  /* describe('when mounted', () => {
    const mockFetchbitcoin = jest.fn()

    beforeEach(() => {
      props.fetchBitcoin = mockFetchbitcoin
      newsList = mount(<NewsList {...props} />)
    })

    it('dispatches the `fetchBitcoin()` method it receives from props', () => {
      expect(mockFetchbitcoin).toHaveBeenCalled()
    })
  })

  describe('when there are valid bitcoin props', () => {
    beforeEach(() => {
      props = { balance: 10, bitcoin: { bpi: { USD: { rate: '1,000' } } } }
      loot = shallow(<Loot {...props} />)
    })

    it('displays the correct bitcoin value', () => {
      expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01')
    })
  }) */
})
