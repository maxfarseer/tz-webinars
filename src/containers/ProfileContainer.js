import React from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../actions/ProfileActions'
import Profile from '../components/Profile'

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(1)
  }

  render() {
    const { user } = this.props
    return <Profile user={user} />
  }
}

const mapStateToProps = state => ({
  user: state.session.user,
})

const mapDispatchToProps = dispatch => ({
  getProfile: id => dispatch(getProfile(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
