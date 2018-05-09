import React from 'react'
import { connect } from 'react-redux'
import News from '../components/News'
import { getNews } from '../actions/NewsActions'

class NewsContainer extends React.Component {
  componentDidMount() {
    this.props.onGetNews()
  }

  render() {
    const { data } = this.props
    return <News data={data} />
  }
}

const mapStateToProps = state => ({
  data: state.news,
})

const mapDispatchToProps = dispatch => ({
  onGetNews: () => dispatch(getNews()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)
