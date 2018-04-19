import React from 'react'
import faHome from 'react-icons/lib/fa/home'
import faInfo from 'react-icons/lib/fa/info'
import faShippingFast from 'react-icons/lib/fa/shopping-bag'
import faEnvelope from 'react-icons/lib/fa/envelope'

const links = [
  { name: 'Home', icon: faHome, id: 1, href: '#home' },
  { name: 'About', icon: faInfo, id: 2, href: '#about' },
  { name: 'Shop', icon: faShippingFast, id: 3, href: '#shop' },
  { name: 'Contact', icon: faEnvelope, id: 4, href: '#contact' }
]

function NavigationMain (props) {
  const linkElements = links.map(l => {
    const IconElem = l.icon
    return (
      <a key={l.id} href={l.href}>
        <IconElem />
        {l.name}
      </a>
    )
  })

  return (
    <div className='navigation-main'>
      {linkElements}
    </div>
  )
}

export default NavigationMain
