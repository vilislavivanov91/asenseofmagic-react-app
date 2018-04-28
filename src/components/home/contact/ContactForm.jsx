import React, { Component } from 'react'
import { IoAt, IoPerson, IoEdit, IoClipboard } from 'react-icons/lib/io'
import { Col, Form, FormGroup, Button } from 'reactstrap'

class ContactForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
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
  }

  handleInputchange (e) {
    const propName = e.target.name
    const value = e.target.value

    this.setState({
      [propName]: value
    })
  }

  onClickHandler () {

  }

  render () {
    return (
      <Col sm={8} className='mt-5'>
        <Form>
          <FormGroup>
            <div className='input-group mb-2'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>
                  <IoAt />
                </div>
              </div>
              <input type='text' required className='form-control' placeholder='Email' />
            </div>
          </FormGroup>
          <FormGroup>
            <div className='input-group mb-2'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>
                  <IoPerson />
                </div>
              </div>
              <input type='text' className='form-control' placeholder='Username' />
            </div>
          </FormGroup>
          <FormGroup>
            <div className='input-group mb-2'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>
                  <IoEdit />
                </div>
              </div>
              <input type='text' className='form-control' placeholder='Subject' />
            </div>
          </FormGroup>
          <FormGroup>
            <div className='input-group mb-2'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>
                  <IoClipboard />
                </div>
              </div>
              <textarea type='text' className='form-control' rows={5} placeholder='Message' />
            </div>
          </FormGroup>
          <Button onClick={this.onClickHandler} outline color='info' block>Submit</Button>
        </Form>
      </Col>
    )
  }
}

export default ContactForm
