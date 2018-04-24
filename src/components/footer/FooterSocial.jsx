import React from 'react'
import { Row, Col } from 'reactstrap'
import './FooterSocial.css'

function FooterSocial (props) {
  const socialLinks = props.socialLinks
  const parts = 12 / socialLinks.length
  console.log(parts)
  const socialLinksElement = socialLinks.map(l => {
    const Icon = l.icon
    return (
      <Col key={l.id} sm={parts - 1} className='social-link rounded border px-2 pt-2 mx-1'>
        <a href={l.link}>
          <Icon className='h2 text-danger' />
        </a>
      </Col>
    )
  })

  return (
    <Col sm={2} className='text-light text-center'>
      <p>Последвай ме</p>
      <Row className=''>
        {socialLinksElement}
      </Row>
    </Col>
  )
}

export default FooterSocial
