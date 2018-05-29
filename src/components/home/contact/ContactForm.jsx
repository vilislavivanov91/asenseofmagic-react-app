import React, { Component } from 'react'
import { IoAt, IoPerson, IoEdit, IoClipboard } from 'react-icons/lib/io'
import { Col, Form, FormGroup, Button } from 'reactstrap'

class ContactForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      subject: '',
      message: ''
    }

    // Bind Handlers
    this.handleInputchange = this.handleInputchange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()

    // Send form somewhere
    console.log(this.state)
  }

  handleInputchange (e) {
    const propName = e.target.name
    const value = e.target.value

    this.setState({
      [propName]: value
    })
  }

  onClickHandler () {
    console.log(this.state)
  }

  render () {
    return (
      <Col sm={8} className='mt-5'>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <div className='input-group mb-2'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>
                  <IoAt />
                </div>
              </div>
              <input
                type='text'
                required
                className='form-control'
                placeholder='Email'
                name='email'
                value={this.state.email}
                onChange={this.handleInputchange} />
            </div>
          </FormGroup>
          <FormGroup>
            <div className='input-group mb-2'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>
                  <IoPerson />
                </div>
              </div>
              <input
                type='text'
                className='form-control'
                placeholder='Username'
                name='username'
                value={this.state.username}
                onChange={this.handleInputchange} />
            </div>
          </FormGroup>
          <FormGroup>
            <div className='input-group mb-2'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>
                  <IoEdit />
                </div>
              </div>
              <input
                type='text'
                className='form-control'
                placeholder='Subject'
                name='subject'
                value={this.state.subject}
                onChange={this.handleInputchange} />
            </div>
          </FormGroup>
          <FormGroup>
            <div className='input-group mb-2'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>
                  <IoClipboard />
                </div>
              </div>
              <textarea
                type='text'
                className='form-control'
                rows={5}
                placeholder='Message'
                name='message'
                value={this.state.message}
                onChange={this.handleInputchange} />
            </div>
          </FormGroup>
          <Button onClick={this.onClickHandler} outline color='info' block>Submit</Button>
        </Form>
      </Col>
    )
  }
}

export default ContactForm
