import React from 'react'
import Dashboard from './dashboard'
import { navigate } from 'gatsby'
import { Redirect, Router } from '@reach/router'
import { getAuthenticatedUser } from '../../apollo/client'

import PrivateRoute from '../../components/privateRoute'
import VolunteerProfileForm from '../../components/VolunteerProfileForm'

const AppIndex = ({ location, navigate }) => {
  console.log(location)

  // Redirect to login page if not logged in
  // if (!getAuthenticatedUser()) {
  //   navigate('/login')
  // }

  // Redirect to dashboard if logged in and accessing `/app`
  // if (location.pathname === '/app' || location.pathname === '/app/') {
  //   console.log('app')
  //   return <Redirect to="/app/dashboard" noThrow />
  // }

  return (
    <Dashboard>
      <Router>
        <VolunteerProfileForm path="app/volunteer-signup" />
      </Router>
    </Dashboard>
  )
}

export default props => <PrivateRoute component={AppIndex} {...props} />
