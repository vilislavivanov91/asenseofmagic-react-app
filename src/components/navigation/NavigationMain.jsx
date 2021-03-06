import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { IoHome, IoInformation, IoBag, IoEmail } from 'react-icons/lib/io'
import { HashLink } from 'react-router-hash-link'
import './NavigationMain.css'

const links = [
  { name: 'Home', icon: IoHome, id: 1, href: '/home', active: true },
  { name: 'About', icon: IoInformation, id: 2, href: '/home#about', active: false },
  { name: 'Shop', icon: IoBag, id: 3, href: '/store', active: false },
  { name: 'Contact', icon: IoEmail, id: 4, href: '/home#contact', active: false }
]

function NavigationMain (props) {
  const linkElements = links.map(l => {
    const IconElement = l.icon
    let linkClassName = 'nav-link text-dark'
    linkClassName += l.active ? ' active' : ''

    return (
      <NavItem active className='navigation-tabs active' key={l.id}>
        <HashLink className={linkClassName} to={l.href}>
          <IconElement className='h3 mr-1 pt-1' />
          {l.name}
        </HashLink>
      </NavItem>
    )
  })

  return (
    <div className='navigation-main'>
      <Nav tabs>
        {linkElements}
      </Nav>
    </div>
  )
}

export default NavigationMain
