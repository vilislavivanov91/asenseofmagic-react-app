import React, { Component } from 'react'

class FooterMain extends Component {
  constructor (props) {
    super(props)

    this.state = {
      subscribedEmail: ''
    }

    // Bind Handler
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubscribeHandler = this.onSubscribeHandler.bind(this)
  }

  onChangeHandler (e) {
    const value = e.target.value
    this.setState({
      subscribedEmail: value
    })
  }

  onSubscribeHandler (e) {
    e.preventDefault()
    window.alert(this.state.subscribedEmail)
  }

  render () {
    return (
      <div className='footer-main'>
        <div className='footer-form'>
          <h1>Subscribe</h1>
          <form onSubmit={this.onSubscribeHandler}>
            <input
              type='email'
              required placeholder='Enter your email'
              onChange={this.onChangeHandler} />
            <input
              type='submit'
              value='Subscribe' />
          </form>
        </div>
        <div className='footer-text'>
          <p>&copy;WebSite.com</p>
          <p>&copy;Created by VI.</p>
        </div>
      </div>
    )
  }
}

export default FooterMain
