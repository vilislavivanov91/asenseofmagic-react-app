import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/home/Home'
import Store from './components/store/Store'

function Routes (props) {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/store' component={Store} />
    </div>
  )
}

export default Routes
