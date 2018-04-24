import React from 'react'
import { Row, Col } from 'reactstrap'
import { IoAndroidCall, IoEmail } from 'react-icons/lib/io'

function ContactInfo (props) {
  return (
    <Col sm={4} className='align-self-center'>
      <Row className='mb-2'>
        <Col sm={4} className='h4'>
          <IoAndroidCall />
        </Col>
        <Col sm={8}>{props.phone}</Col>
      </Row>
      <Row>
        <Col sm={4} className='h4'>
          <IoEmail />
        </Col>
        <Col sm={8}>{props.email}</Col>
      </Row>
    </Col>
  )
}

export default ContactInfo
