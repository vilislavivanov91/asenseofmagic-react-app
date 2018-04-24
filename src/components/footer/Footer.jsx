import React from 'react'
import './Footer.css'
import FooterLogo from './FooterLogo'
import FooterSocial from './FooterSocial'
import FooterMain from './FooterMain'
import { Row, Col } from 'reactstrap'
import { IoSocialFacebook, IoSocialTwitter } from 'react-icons/lib/io'

const social = [
  { icon: IoSocialFacebook, id: 1, link: '/fb' },
  { icon: IoSocialTwitter, id: 2, link: '/tw' }
]

function Footer (props) {
  return (
    <footer className='pt-3'>
      <Row className='pb-2'>
        <FooterLogo />
        <FooterSocial socialLinks={social} />
        <FooterMain />
      </Row>
      <hr className='bg-light' />
      <Row className='pb-2 text-light'>
        <Col className='text-center text-danger'>&copy;WebSite.com</Col>
        <Col className='text-center text-danger'>&copy;Created by VI.</Col>
      </Row>
    </footer>
  )
}

export default Footer
