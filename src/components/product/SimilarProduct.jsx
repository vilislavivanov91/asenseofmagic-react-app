import React, { Component } from 'react'
import ProductCart from '../common/ProductCart'

class SimilarProduct extends Component {
  render () {
    return (
      <ProductCart className='similar-product-image' product={this.props.product} />
    )
  }
}

export default SimilarProduct
