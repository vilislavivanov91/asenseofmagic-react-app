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
    const allProductsInCart = this.state.productsInCart.length > 0 ? (
      this.state.productsInCart.map(p => {
        return (
          <CartProduct key={p.id} src={p.src} name={p.name} price={p.price} />
        )
      })
    ) : (
      <div className='text-center'>Кошницата е празна</div>
    )
    return (
      <div>
        {allProductsInCart}
        <hr />
      </div>
    )
  }
}

export default CartProducts
