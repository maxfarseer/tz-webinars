import React from 'react'
import { connect } from 'react-redux'
import Profile from '../components/Profile'

class ProfileContainer extends React.Component {
  render() {
    const { user } = this.props
    return <Profile user={user} />
  }
}

const mapStateToProps = state => ({
  user: state.session.user,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
