import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { IoIosCart } from 'react-icons/lib/io'
import { Container, Popover, PopoverHeader, PopoverBody, NavItem, NavLink, Badge, Button } from 'reactstrap'
import CartProducts from './CartProducts'
import productsInCartData from '../../data/productsInCart'

class CartPopoverMenu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      popoverOpen: false,
      numbersOfProductInCart: 0,
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
  }

  onButtonClickHandler () {
    this.props.history.push('/cart')
    this.toggle()
  }

  componentDidMount () {
    let numbersOfProductInCart = productsInCartData.getAllProducts().length
    this.setState({
      numbersOfProductInCart
    })
    this.setPrice()
  }

  setPrice () {
    const totalPrice = productsInCartData.getProductsPrice()
    this.setState({
      totalPrice
    })
  }

  render () {
    return (
      <div>
        <NavItem id='PopoverActivator'>
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
