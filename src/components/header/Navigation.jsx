import React from 'react'
import './Navigation.css'
import FontAwesome from '@fortawesome/react-fontawesome'

function Navigation (props) {
  const links = props.links
  const linkElements = links.map(l => {
    return (
      <a key={l.id} href={l.href}>
        <FontAwesome icon={l.icon} />
        {l.name}
      </a>
    )
  })

  return (
    <nav className='navigation'>
      <div className='navigation-logo'>
        <h2>{props.logo}</h2>
      </div>
      <div className='navigation-main'>
        {linkElements}
      </div>
    </nav>
  )
}

export default Navigation
