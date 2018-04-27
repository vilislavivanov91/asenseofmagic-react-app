import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import './Contact.css'
import { Row } from 'reactstrap'

const facebook = 'https://www.facebook.com/profile.php?id=100008222798165&fref=hovercard&hc_location=chat'

function Contact (props) {
  return (
    <div id='contact' className='mb-5'>
      <h1 className='contact-header'>Contact</h1>
      <Row>
        <ContactForm />
        <ContactInfo facebook={facebook} phone='+359 897 02 10 32' email='email@address.com' />
      </Row>
    </div>
  )
}

export default Contact
