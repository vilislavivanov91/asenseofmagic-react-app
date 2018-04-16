import React, { Component } from 'react'
import './Header.css'
import Navigation from './Navigation'
import HeaderText from './HeaderText'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import faInfo from '@fortawesome/fontawesome-free-solid/faInfo'
import faShippingFast from '@fortawesome/fontawesome-free-solid/faShippingFast'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'

const links = [
  { name: 'Home', icon: faHome, id: 1, href: '#home' },
  { name: 'About', icon: faInfo, id: 2, href: '#about' },
  { name: 'Shop', icon: faShippingFast, id: 3, href: '#shop' },
  { name: 'Contact', icon: faEnvelope, id: 4, href: '#contact' }
]

const quote = {
  text: 'Ръчно изработените изделия са разкош и не е задължително всеки да ги притежава. Който иска да ги има или трябва да плати на майстора за труда, или да си ги направи сам.',
  cite: 'Коко Шанел'
}

class ImageHeader extends Component {
  render () {
    return (
      <header>
        <div className='image-header'>
          <Navigation logo='A Sense Of Magic' links={links} />
          <HeaderText title='A Sense Of Magic' subtitle='some text' quote={quote} />
        </div>
      </header>
    )
  }
}

export default ImageHeader
