import React from 'react'
import Replay from 'material-ui-icons/Replay'
import BookInfo from './BookInfo'
import { httpGet } from '../helpers/network'

class Book extends React.Component {
  state = {
    data: [],
    isLoading: false,
    error: false,
  }
  componentDidMount() {
    this.loadData()
  }
  loadData = () => {
    const epicName = this.props.match.path.split('/')[2]
    this.setState({ isLoading: true, error: false })

    httpGet(epicName)
      .then(json => this.setState({ data: json.books, isLoading: false }))
      .catch(e => this.setState({ isLoading: false, error: true }))
  }

  renderTemplate = () => {
    const { error, isLoading, data } = this.state

    if (error) {
      return (
        <p>
          Во время загрузки данных произошла ошибка{' '}
          <Replay style={{ cursor: 'pointer' }} onClick={this.loadData} />
        </p>
      )
    }

    if (isLoading) {
      return <p>Загружаю...</p>
    } else {
      return data.map((item, index) => {
        return <BookInfo key={index} data={item} />
      })
    }
  }

  render() {
    return <div>{this.renderTemplate()}</div>
  }
}

export default Book
