import React from 'react'
import { Link } from 'react-router-dom'

function NavigationLogo (props) {
  return (
    <div className='navigation-logo'>
      <Link className='h3 text-monospace' to='/home'>Logo name</Link>
    </div>
  )
}

export default NavigationLogo
