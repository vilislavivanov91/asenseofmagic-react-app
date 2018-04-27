import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { IoHome, IoInformation, IoBag, IoEmail } from 'react-icons/lib/io'
import './NavigationMain.css'

const links = [
  { name: 'Home', icon: IoHome, id: 1, href: '#home', active: true },
  { name: 'About', icon: IoInformation, id: 2, href: '#about', active: false },
  { name: 'Shop', icon: IoBag, id: 3, href: '/shop', active: false },
  { name: 'Contact', icon: IoEmail, id: 4, href: '#contact', active: false }
]

function NavigationMain (props) {
  const linkElements = links.map(l => {
    const IconElement = l.icon
    return (
      <NavItem className='navigation-tabs' key={l.id}>
        <NavLink active={l.active} className='text-dark' href={l.href}>
          <IconElement className='h3 mr-1 pt-1' />
          {l.name}
        </NavLink>
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
