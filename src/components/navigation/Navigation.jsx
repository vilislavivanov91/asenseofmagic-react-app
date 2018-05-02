import React from 'react'
import NavigationMain from './NavigationMain'
import NavigationSecondary from './NavigationSecondary'
import { Navbar } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import NavigationLogo from './NavigationLogo'

function Navigation (props) {
  return (
    <div>
      <Navbar fixed='top' color='light' dark>
        <NavigationLogo />
        <NavigationMain />
        <NavigationSecondary />
      </Navbar>
    </div>
  )
}

withRouter(Navigation)

export default Navigation
