import React, { Component } from 'react'
import { UsaStates } from 'usa-states'
import {
  Col,
  Form,
  Button,
  Input,
  Icon,
  InputNumber,
  Divider,
  Select,
} from 'antd'

import { Mutation } from 'react-apollo'
import { SIGNUP } from '../apollo/mutations'
import graphQlErrors from './graphqlErrors'
import { navigate } from 'gatsby'

function hasErrors(fieldsError) {
  const errors = {
    ...fieldsError,
    ...fieldsError.address,
    address: null,
  }
  // console.log(errors)
  return Object.keys(errors).some(field => errors[field])
}

const statesWithAbbreviations = new UsaStates().format({
  $name: 'name',
  $abbreviation: 'abbr',
})

export default class VolunteerProfileForm extends Component {
  render() {
    return (
      <div>
        <h3>VolunteerProfileForm</h3>
        {
          <form action="" />
          /* TODO:
        


        Build out form
        refer to server source/models/volunteer profile.js
        preferred contact info
        
        l*/
        }
      </div>
    )
  }
}
//
