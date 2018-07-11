import React from 'react'
import { connect } from 'react-redux'
import NewsList from './NewsList'
import { getAll } from '../selectors'
import { getNews } from '../actions'

export class NewsContainer extends React.Component {
  componentDidMount() {
    this.props.onGetNews()
  }

  render() {
    const { news: { isLoading, data, errorMsg } } = this.props
    return (
      <React.Fragment>
        {errorMsg && <p>{errorMsg}</p>}
        {isLoading ? <p>Loading...</p> : null}
        {data && data.length && <NewsList data={data} />}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  news: getAll(state),
})

const mapDispatchToProps = dispatch => ({
  onGetNews: () => dispatch(getNews()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)
