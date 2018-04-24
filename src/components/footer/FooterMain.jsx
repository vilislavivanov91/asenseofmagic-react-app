import React, { Component } from 'react'
import { Col, Form, FormGroup, Button } from 'reactstrap'
import { IoAt } from 'react-icons/lib/io'

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
      <Col sm={7} md={6}>
        <div>
          <p className='text-light text-center mb-0'>Искаш първи да разбереш като кача нов продукт?</p>
          <p className='text-light text-center small'>Испрати email и ще получиш известие щом кача нещо ново</p>
          <Form inline className='justify-content-center'>
            <FormGroup>
              <div className='input-group'>
                <div className='input-group-prepend mb-sm-0 mb-1'>
                  <div className='input-group-text'>
                    <IoAt />
                  </div>
                </div>
                <input type='text' required className='form-control mr-3 mb-sm-0 mb-1' placeholder='Email' />
              </div>
              {/* <Input type='email' required placeholder='Enter your email' className='mr-3 mb-sm-0 mb-1' /> */}
              <Button color='danger'>Абонирай се!</Button>
            </FormGroup>
          </Form>
        </div>
      </Col>
    )
  }
}

export default FooterMain
