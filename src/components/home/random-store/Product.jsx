import React, { Component } from 'react'
import ProductImage from '../../common/ProductImage'
import './Product.css'

class Product extends Component {
  render () {
    return (
      <div>
        <ProductImage
          className='product-img'
          src={this.props.src}
          name={this.props.name}
          id={this.props.id} />
      </div>
    )
  }
}

export default Product
