//import React from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/SessionActions'
import Login from '../components/Login'

const mapDispatchToProps = dispatch => ({
  logIn: params => dispatch(logIn(params)),
})

export default connect(null, mapDispatchToProps)(Login)
