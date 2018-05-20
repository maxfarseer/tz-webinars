import React from 'react'
import { shallow } from 'enzyme'
import { NewsContainer } from './NewsContainer'

describe('News container', () => {
  const props = {
    news: {
      data: [],
      isLoading: false,
      errorMsg: null,
    },
    onGetNews: () => {},
  }

  describe('News container initial + cdm', () => {
    const mockFetchGetNews = jest.fn()
    const nextProps = {
      ...props,
      onGetNews: mockFetchGetNews,
    }
    const newsContainer = shallow(<NewsContainer {...nextProps} />)

    it('renders properly', () => {
      expect(newsContainer).toMatchSnapshot()
    })

    it('dispatches the `onGetNews()` method it receives from props', () => {
      expect(mockFetchGetNews).toHaveBeenCalledTimes(1)
    })
  })

  describe('News container isLoading', () => {
    const nextProps = {
      ...props,
      news: {
        ...props.news,
        isLoading: true,
      },
    }

    const newsContainer = shallow(<NewsContainer {...nextProps} />)

    it('renders properly', () => {
      expect(newsContainer).toMatchSnapshot()
    })

    it('renders preloader template', () => {
      expect(newsContainer.find('p').text()).toEqual('Loading...')
    })
  })

  describe('News container render <NewsList />', () => {
    const nextProps = {
      ...props,
      news: {
        ...props.news,
        isLoading: false,
        data: [1],
      },
    }

    const newsContainer = shallow(<NewsContainer {...nextProps} />)

    it('renders properly', () => {
      expect(newsContainer).toMatchSnapshot()
    })

    it('renders preloader template', () => {
      expect(newsContainer.find('NewsList')).toHaveLength(1)
    })
  })
})
