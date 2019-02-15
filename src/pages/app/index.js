import React from 'react'
import Dashboard from './dashboard'
import { Router } from '@reach/router'

import PrivateRoute from '../../components/privateRoute'
import VolunteerProfileForm from '../../components/VolunteerProfileForm'
import RecipientProfileForm from '../../components/RecipientProfileForm'

const AppIndex = () => (
  <Dashboard>
    <Router>
      <VolunteerProfileForm path="app/volunteer-signup" />
      <RecipientProfileForm path="app/recipient-signup" />
    </Router>
  </Dashboard>
)

export default props => <PrivateRoute component={AppIndex} {...props} />
