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

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

const statesWithAbbreviations = new UsaStates().format({
  $name: 'name',
  $abbreviation: 'abbr',
})

class SignupForm extends Component {
  state = {
    confirmDirty: false,
  }

  handleConfirmBlur = e => {
    const value = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  handleSelectChange = value => {
    console.log(`selected ${value}`)
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('Passwords do not match.')
    } else {
      callback()
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { validateFields, getFieldsValue } = this.props.form
    console.log(getFieldsValue())
    // TODO: validateFields before submit
  }
  render() {
    console.log(this.props)
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
      getFieldsValue,
    } = this.props.form
    const firstNameError =
      isFieldTouched('firstName') && getFieldError('firstName')
    const lastNameError =
      isFieldTouched('lastName') && getFieldError('lastName')
    const emailError = isFieldTouched('email') && getFieldError('email')
    const passwordError =
      isFieldTouched('password') && getFieldError('password')

    console.log(getFieldsValue())

    const { Option } = Select

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    }

    const stateOptions = statesWithAbbreviations.map(state => (
      <Option key={state.abbreviation} value={state.abbreviation}>
        {state.name}
      </Option>
    ))

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item
          {...formItemLayout}
          validateStatus={firstNameError ? 'error' : ''}
          help={firstNameError || ''}
          label="First Name"
        >
          {getFieldDecorator('firstName', {
            rules: [
              { required: true, message: 'Please enter your first name.' },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="Middle Name">
          {getFieldDecorator('middleName')(<Input />)}
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          validateStatus={lastNameError ? 'error' : ''}
          help={lastNameError || ''}
          label="Last Name"
        >
          {getFieldDecorator('lastName', {
            rules: [
              { required: true, message: 'Please enter your last name.' },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="Age">
          {getFieldDecorator('age', {
            rules: [
              {
                type: 'integer',
                required: true,
                message: 'Please enter a whole number.',
              },
            ],
          })(<InputNumber min={1} step="1" type="number" />)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [
              { required: true, message: 'Please enter your phone number.' },
              // TODO: validate phone number input
              // TODO: input mask
            ],
          })(<Input type="tel" />)}
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          validateStatus={emailError ? 'error' : ''}
          help={emailError || ''}
          label="Email"
        >
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                required: true,
                message: 'Please enter a valid email address.',
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
          label="Password"
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please enter a password.' }],
          })(
            <Input.Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Password"
            />
          )}
        </Form.Item>

        <Form.Item {...formItemLayout} label="Confirm Password">
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password.',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Divider span>Address</Divider>
        </Form.Item>

        <Form.Item {...formItemLayout} label="Street 1">
          {getFieldDecorator('address.street1', {
            rules: [{ required: true, message: 'Address street 1 required.' }],
          })(<Input />)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="Street 2">
          {getFieldDecorator('address.street2')(<Input />)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="City">
          {getFieldDecorator('address.city', {
            rules: [{ required: true, message: 'City is required.' }],
          })(<Input />)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="State">
          {getFieldDecorator('address.state', {
            rules: [{ required: true, message: 'State is required.' }],
          })(
            <Select
              showSearch
              // style={{ width: 300 }}
              placeholder="Select your state"
              optionFilterProp="children"
              onChange={this.handleSelectChange}
              // onFocus={handleFocus}
              // onBlur={handleBlur}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {stateOptions}
            </Select>
          )}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create({ name: 'signup' })(SignupForm)
