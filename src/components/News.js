import React from 'react'
import PropTypes from 'prop-types'

const News = ({ data }) => {
  return (
    <div className={'news-list'}>
      {data.length ? <p>"отрисовка новостей"</p> : <p>Новостей нет</p>}
    </div>
  )
}

News.proptypes = {
  data: PropTypes.array.isRequired,
}

export default News
