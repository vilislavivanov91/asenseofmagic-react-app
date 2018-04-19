import React from 'react'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaPhone from 'react-icons/lib/fa/phone'

function FooterSecondary (props) {
  return (
    <div className='footer-secondary'>
      <a href={props.facebook}>
        <FaFacebook id='fb-icon' />
        <p>Facebook Page</p>
      </a>
      <a href=''>
        <FaEnvelope />
        <p>{props.email}</p>
      </a>
      <a href='' className='phone'>
        <FaPhone />
        <p>{props.phone}</p>
      </a>
      <div className='footer-text'>
        <p>&copy;WebSite.com</p>
        <p>&copy;Created by VI.</p>
      </div>
    </div>
  )
}

export default FooterSecondary
