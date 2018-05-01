import React, { Component } from 'react'
import productsInCartData from '../../data/productsInCart'
import CartProduct from './CartProduct'

class CartProducts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      productsInCart: []
    }
  }

  componentDidMount () {
    const productsInCart = productsInCartData.getAllProducts()
    this.setState({
      productsInCart
    })
  }

  render () {
    const allProductsInCart = this.state.productsInCart.map(p => {
      return (
        <CartProduct src={p.src} name={p.name} price={p.price} />
      )
    })
    return (
      <div>
        {allProductsInCart}
        <hr />
      </div>
    )
  }
}

export default CartProducts
