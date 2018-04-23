import React from 'react'
import { Col } from 'reactstrap'

function AboutInfo (props) {
  return (
    <Col md={7} sm={6} xs={12}>
      <h2>{props.info.title}</h2>
      <p>{props.info.text}</p>
    </Col>
  )
}

export default AboutInfo
