import React, { Component } from 'react'
import store from '../../reduxStore'
import { add, getTotalPrice } from '../../actions/cartAction'
import ProductCart from '../common/ProductCart'

class SimilarProduct extends Component {
  constructor (props) {
    super(props)

    // Bind handlers
    this.handleButtonAddProduct = this.handleButtonAddProduct.bind(this)
  }

  handleButtonAddProduct (e) {
    store.dispatch(add(this.props.product))
    store.dispatch(getTotalPrice())
  }

  render () {
    return (
      <ProductCart product={this.props.product} />
    )
  }
}

export default SimilarProduct
