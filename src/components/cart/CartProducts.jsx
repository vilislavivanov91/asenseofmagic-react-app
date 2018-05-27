import React, { Component } from 'react'
import CartProduct from './CartProduct'
class CartProducts extends Component {
  render () {
    const products = this.props.products || []
    const allProductsInCart = products.length > 0 ? (
      this.props.products.map(p => {
        return (
          <CartProduct key={p.id} product={p} />
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
