import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { IoIosCart } from 'react-icons/lib/io'
import RatingStar from './RatingStar'
import SharingButtons from './SharingButtons'
import productsInCart from '../../data/productsInCart'

class ProductInfo extends Component {
  constructor (props) {
    super(props)

    // Bind handlers
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler (e) {
    e.preventDefault()
    const allProductsInCart = productsInCart.getAllProducts()
    const currentProduct = this.props.product

    if (allProductsInCart.indexOf(currentProduct) === -1) {
      productsInCart.addProduct(currentProduct)
    } else {
      console.log('You already add this product')
    }
  }

  render () {
    const GRADE = (this.props.rateCount === 1) ? ('оценка ') : ('оценки')
    return (
      <div className='product-wrapper'>
        <h3 className='text-center'>{this.props.product.name}</h3>
        <div className='text-center'>
          <p className='d-inline-block mr-3'>Цена:</p>
          <p className='d-inline-block'>{this.props.product.price} лв.</p>
        </div>
        <p className='text-center mb-0'>{this.props.product.name}</p>
        <br />
        {this.props.available ? <p className='text-success text-center'>Наличен</p>
          : <p className='text-danger text-center'>Не е наличен</p>}
        <RatingStar
          ratingCompleted={this.props.ratingCompleted}
          currentRate={this.props.currentRate}
          numberOfStars={this.props.numberOfStars} />
        <p className='text-center'>{this.props.avarageRate} звезди / {this.props.rateCount} {GRADE}</p>
        <Button onClick={this.onClickHandler} color='primary' block>
          <IoIosCart className='h2 pt-0' />
          <p className='d-inline ml-2'>
            Добави
          </p>
        </Button>
        <SharingButtons />
      </div>
    )
  }
}

export default ProductInfo
