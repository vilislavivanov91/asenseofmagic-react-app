import React, { Component } from 'react'

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

  render () {
    return (
      <div className='contact-form'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-info'>
            <input
              onChange={this.handleInputchange}
              type='text'
              placeholder='Name*'
              name='name'
              id='contact-name' />
            <input
              type='email'
              placeholder='Email*'
              name='email'
              id='contact-email' />
          </div>
          <input
            type='text'
            placeholder='Subject'
            name='subject'
            id='contact-subject' />
          <textarea
            name='message'
            id='contact-message'
            placeholder='Message'
            cols='60' rows='10' />
          <input type='submit' value='Send' />
        </form>
      </div>
    )
  }
}

export default ContactForm
