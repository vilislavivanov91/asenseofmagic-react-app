import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { IoIosCart } from 'react-icons/lib/io'
import { Container, Popover, PopoverHeader, PopoverBody, NavItem, NavLink, Badge, Button } from 'reactstrap'
import CartProducts from './CartProducts'
import store from '../../reduxStore'

class CartPopoverMenu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      popoverOpen: false,
      numberOfProducts: 0,
      totalPrice: 0
    }

    // Bind Handlers
    this.toggle = this.toggle.bind(this)
    this.onButtonClickHandler = this.onButtonClickHandler.bind(this)
  }

  toggle () {
    this.setState((prevState) => {
      return {
        popoverOpen: !prevState.popoverOpen
      }
    })
    this.setPrice()
    this.setNumbersOfProducts()
  }

  onButtonClickHandler () {
    this.props.history.push('/cart')
    this.toggle()
  }

  componentDidMount () {
    this.setPrice()
    this.setNumbersOfProducts()

    store.subscribe(() => {
      let currentState = store.getState()
      this.setState({
        numberOfProducts: currentState.products.length,
        totalPrice: currentState.totalPrice
      })
    })
  }

  setPrice () {
    store.subscribe(() => {
      const currentState = store.getState()
      this.setState({
        totalPrice: currentState.totalPrice
      })
    })
  }

  setNumbersOfProducts () {

  }

  render () {
    return (
      <div>
        <NavItem id='PopoverActivator'>
          <NavLink href='#'>
            <IoIosCart onClick={this.toggle} className='text-secondary mr-0 h1 mr-1 pt-1' />
            <Badge color='success' className='ml-0'>
              {this.state.numberOfProducts}
            </Badge>
          </NavLink>
        </NavItem>
        <Popover
          className='mr-3'
          placement='bottom'
          isOpen={this.state.popoverOpen}
          toggle={this.toggle}
          target='PopoverActivator'>
          <PopoverHeader>
            <div className='text-center'>
              <h6>Количка за пазаруване</h6>
              <p>Общо: <span>{this.state.totalPrice} лв</span></p>
            </div>
          </PopoverHeader>
          <PopoverBody>
            <Container fluid>
              <CartProducts />
              <Button onClick={this.onButtonClickHandler} className='my-2' block outline color='info'>Преглед на количката</Button>
            </Container>
          </PopoverBody>
        </Popover>
      </div>
    )
  }
}

export default withRouter(CartPopoverMenu)
