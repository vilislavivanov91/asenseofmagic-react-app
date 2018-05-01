import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { IoIosCart } from 'react-icons/lib/io'
import { Container, Popover, PopoverHeader, PopoverBody, NavItem, NavLink, Badge, Button } from 'reactstrap'
import CartProductInfo from './CartProductInfo'

const img = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg'

class CartPopoverMenu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      popoverOpen: false,
      numbersOfProductInCart: 3
    }

    // Bind Handlers
    this.toggle = this.toggle.bind(this)
    this.onButtonClickHandler = this.onButtonClickHandler.bind(this)
  }

  toggle () {
    console.log('toggled')
    this.setState((prevState) => {
      return {
        popoverOpen: !prevState.popoverOpen
      }
    })
  }
  onButtonClickHandler () {
    this.props.history.push('cart')
  }

  render () {
    return (
      <div>
        <NavItem id='PopoverActivator' >
          <NavLink href='#'>
            <IoIosCart onClick={this.toggle} className='text-secondary mr-0 h1 mr-1 pt-1' />
            <Badge color='success' className='ml-0'>
              {this.state.numbersOfProductInCart}
            </Badge>
          </NavLink>
        </NavItem>
        <Popover
          className='mr-3'
          placement='bottom'
          isOpen={this.state.popoverOpen}
          toggle={this.togle}
          target='PopoverActivator'>
          <PopoverHeader>
            <div className='d-flex flex-row justify-content-between'>
              <h6>Количка за пазаруване</h6>
              <p>Общо: <span>36.00 лв</span></p>
            </div>
          </PopoverHeader>
          <PopoverBody>
            <Container fluid>
              <CartProductInfo name='First Product' price={49.99} src={img} />
              <CartProductInfo name='First Product' price={49.99} src={img} />
              <CartProductInfo name='First Product' price={49.99} src={img} />
              <Button onClick={this.onButtonClickHandler} className='my-2' block outline color='info'>Преглед на количката</Button>
            </Container>
          </PopoverBody>
        </Popover>
      </div>
    )
  }
}

export default withRouter(CartPopoverMenu)
