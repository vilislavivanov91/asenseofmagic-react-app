import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/home/Home'
import Store from './components/store/Store'

function Routes (props, context) {
  return (
    <Switch>
      <Route exact path='/' render={() => (<Redirect to='/home' />)} />
      <Route path='/home' component={Home} />
      <Route path='/store' component={Store} />
      <Route path='#about' component={Store} />
    </Switch>
  )
}

export default Routes
