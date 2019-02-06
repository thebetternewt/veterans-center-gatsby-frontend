import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import { FaMapMarkerAlt, FaChild, FaHome, FaSun } from 'react-icons/fa'
import styled from 'styled-components'

const ServiceOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: yellow; */
  cursor: pointer;
  transition: all 200ms ease-in;

  &:hover {
    transform: scale(1.1);
    color: teal;
  }
`

const ServiceOptionIconWrapper = styled.div`
  margin: 10px;
`

export default class CreateNeed extends Component {
  render() {
    const serviceOptions = [
      {
        text: 'Travel',
        iconComponent: ({ size }) => <FaMapMarkerAlt size={size} />,
      },
      {
        text: 'Childcare',
        iconComponent: ({ size }) => <FaChild size={size} />,
      },
      {
        text: 'Home Maintenance',
        iconComponent: ({ size }) => <FaHome size={size} />,
      },
      {
        text: 'Lawncare',
        iconComponent: ({ size }) => <FaSun size={size} />,
      },
    ]

    const serviceOptionItems = serviceOptions.map(({ text, iconComponent }) => (
      <Col span={6}>
        <ServiceOption>
          <ServiceOptionIconWrapper>
            {iconComponent({ size: '3rem' })}
          </ServiceOptionIconWrapper>
          <h4>{text}</h4>
        </ServiceOption>
      </Col>
    ))

    const { cancel } = this.props

    return (
      <div>
        <h3>What kind of need to you have?</h3>
        <Row justify="center" type="flex" gutter={5} style={{ margin: '2rem' }}>
          {serviceOptionItems}
        </Row>
        <Button size="large" type="primary" onClick={() => cancel()}>
          cancel
        </Button>
      </div>
    )
  }
}
