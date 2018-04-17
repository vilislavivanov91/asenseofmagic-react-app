import React from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import './Contact.css'

const facebook = 'https://www.facebook.com/profile.php?id=100008222798165&fref=hovercard&hc_location=chat'

function Contact (props) {
  return (
    <div className='contact-wrapper container'>
      <h1>Contact</h1>
      <div className='contact-me'>
        <ContactInfo facebook={facebook} phone='+359 897 02 10 32' email='email@address.com' />
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
