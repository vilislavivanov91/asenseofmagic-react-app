import React from 'react'
import FaFacebook from 'react-icons/lib/fa/facebook'

function ContactInfo (props) {
  return (
    <div className='contact-info'>
      <div className='contact-facebook'>
        <h2>Facebook</h2>
        <p>
          <a href={props.facebook}>
            <FaFacebook id='fb-icon-contact' />
            Facebook Page
          </a>
        </p>
      </div>
      <div className='contact-phone'>
        <h2>Phone Number</h2>
        <p>{props.phone}</p>
      </div>
      <div className='contact-email'>
        <h2>Email Address</h2>
        <p>{props.email}</p>
      </div>
    </div>
  )
}

export default ContactInfo
