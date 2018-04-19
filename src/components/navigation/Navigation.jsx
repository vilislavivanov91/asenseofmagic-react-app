import React from 'react'
import './Navigation.css'
import NavigationMain from './NavigationMain'
import NavigationSecondary from './NavigationSecondary'
import NavigationLogo from './NavigationLogo'

function Navigation (props) {
  return (
    <nav className='navigation'>
      <NavigationLogo />
      <NavigationMain />
      <NavigationSecondary />
    </nav>
  )
}

export default Navigation
