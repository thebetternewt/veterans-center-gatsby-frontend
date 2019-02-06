import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col, Button } from 'antd'

// import { Button } from './ui/buttons'
import CreateNeed from './createNeed'
import CreateVolunteerProfile from './createVolunteerProfile'

const RegisterOption = styled(Col)`
  p {
    text-align: center;
    margin: 0 0 2rem;
  }
  h2 {
    text-align: center;
    margin: 0;
  }
`

export default class HomeSignup extends Component {
  state = {
    startedNeed: false,
    startedVolunteerProfile: false,
  }

  handleStartNeed = () => this.setState({ startedNeed: true })
  handleStartVolunteerProfile = () =>
    this.setState({ startedVolunteerProfile: true })
  handleCancel = () =>
    this.setState({ startedNeed: false, startedVolunteerProfile: false })

  render() {
    const { startedNeed, startedVolunteerProfile } = this.state

    let content = (
      <>
        <RegisterOption span={6} offset={6} align="center">
          <p>Looking for services?</p>
          <Button type="primary" size="large" onClick={this.handleStartNeed}>
            Post a need
          </Button>
        </RegisterOption>
        <RegisterOption span={6} align="center">
          <p>Looking to help out?</p>
          <Button
            type="primary"
            size="large"
            onClick={this.handleStartVolunteerProfile}
          >
            Volunteer
          </Button>
        </RegisterOption>
      </>
    )

    if (startedNeed) {
      content = <CreateNeed cancel={this.handleCancel} />
    }

    if (startedVolunteerProfile) {
      content = <CreateVolunteerProfile cancel={this.handleCancel} />
    }

    return (
      <Row
        align="center"
        style={{
          border: '1px solid #ddd',
          borderRadius: 10,
          padding: '2rem',
          backgroundColor: '#fff',
        }}
      >
        {content}
      </Row>
    )
  }
}
