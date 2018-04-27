import React from 'react'
import NavigationMain from './NavigationMain'
import NavigationSecondary from './NavigationSecondary'
import { Navbar, NavbarBrand } from 'reactstrap'

function Navigation (props) {
  return (
    <div>
      <Navbar fixed='top' color='light' dark>
        <NavbarBrand>A Sense Of Magic</NavbarBrand>
        <NavigationMain />
        <NavigationSecondary />
      </Navbar>
    </div>
  )
}

export default Navigation
