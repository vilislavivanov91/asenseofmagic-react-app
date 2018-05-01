import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/home/Home'
import Product from './components/product/Product'
import Cart from './components/cart/Cart'
import Store from './components/store/Store'

function Routes (props, context) {
  return (
    <Switch>
      <Route exact path='/' render={() => (<Redirect to='/home' />)} />
      <Route path='/home' component={Home} />
      <Route path='/product/:id' component={Product} />
      <Route path='/cart' component={Cart} />
      <Route path='/store' component={Store} />
    </Switch>
  )
}

export default Routes
