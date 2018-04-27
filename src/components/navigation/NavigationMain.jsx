import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { IoHome, IoInformation, IoBag, IoEmail } from 'react-icons/lib/io'
import { Link } from 'react-router-dom'
import './NavigationMain.css'

const links = [
  { name: 'Home', icon: IoHome, id: 1, href: '/', active: true },
  { name: 'About', icon: IoInformation, id: 2, href: '/#about', active: false },
  { name: 'Shop', icon: IoBag, id: 3, href: '/store', active: false },
  { name: 'Contact', icon: IoEmail, id: 4, href: '/#contact', active: false }
]

function NavigationMain (props) {
  const linkElements = links.map(l => {
    const IconElement = l.icon
    let linkClassName = 'nav-link text-dark p-2'
    linkClassName += l.active ? ' active' : ''
    return (
      <NavItem active className='navigation-tabs active' key={l.id}>
        <Link className={linkClassName} to={l.href}>
          <IconElement className='h3 mr-1 pt-1' />
          {l.name}
        </Link>
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
