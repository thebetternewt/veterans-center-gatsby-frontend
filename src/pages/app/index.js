import React from 'react'
import Dashboard from './dashboard'
import { navigate } from 'gatsby'
import { Redirect, Router } from '@reach/router'
import { getAuthenticatedUser } from '../../apollo/client'

import PrivateRoute from '../../components/privateRoute'

const AppIndex = ({ location, navigate }) => {
  console.log(location)

  // Redirect to login page if not logged in
  // if (!getAuthenticatedUser()) {
  //   navigate('/login')
  // }

  // Redirect to dashboard if logged in and accessing `/app`
  if (location.pathname === '/app' || location.pathname === '/app/') {
    console.log('app')
    return <Redirect to="/app/dashboard" noThrow />
  }

  return (
    <Router>
      <Dashboard path="app/dashboard" />
    </Router>
  )
}

export default props => <PrivateRoute component={AppIndex} {...props} />
