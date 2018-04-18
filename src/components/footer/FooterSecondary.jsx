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
      <a href=''>
        <FaPhone />
        <p>{props.phone}</p>
      </a>
    </div>
  )
}

export default FooterSecondary
