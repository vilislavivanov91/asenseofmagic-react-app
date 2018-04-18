import React from 'react'
import './Footer.css'
import FooterLogo from './FooterLogo'
import FooterMain from './FooterMain'
import FooterSecondary from './FooterSecondary'

const facebook = 'https://www.facebook.com/Polya-Radeva-Art-of-Paper-706745186052055/'
const email = 'email.address@abv.bg'
const phoneNumber = '+359 899 31 13 32'

function Footer (props) {
  return (
    <footer>
      <div className='footer-wrapper'>
        <FooterLogo />
        <FooterMain />
        <FooterSecondary facebook={facebook} email={email} phone={phoneNumber} />
      </div>
    </footer>
  )
}

export default Footer
