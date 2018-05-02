import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardFooter, CardText, Button } from 'reactstrap'
import ProductImage from '../common/ProductImage'
import productsInCartData from '../../data/productsInCart'

class SimilarProduct extends Component {
  constructor (props) {
    super(props)

    // Bind handlers
    this.handleButtonAddProduct = this.handleButtonAddProduct.bind(this)
  }

  handleButtonAddProduct (e) {
    e.preventDefault()

    productsInCartData.addProduct(this.props.product)
  }

  render () {
    const availabilityElement = this.props.product.available ? (
      <span className='align-self-center text-success text-center'>В наличност</span>
    ) : (
      <span className='not-available text-light small px-2 py-1'>Изчерпан</span>
    )
    const buttonElement = this.props.product.available ? (
      <Button onClick={this.handleButtonAddProduct} color='success' block>Добави</Button>
    ) : (
      <Button color='primary' block>Поръчай</Button>
    )
    return (
      <Card className='text-center similar-product-card'>
        <ProductImage
          className='similar-product-image'
          name={this.props.product.name}
          id={this.props.product.id}
          src={this.props.product.src}
          height={100} />
        <CardBody>
          <CardHeader tag='h5'>
            {this.props.product.name}
          </CardHeader>
          {availabilityElement}
          <CardText className='d-none d-sm-block'>
            {this.props.product.price}лв.
          </CardText>
          <CardFooter>
            {buttonElement}
          </CardFooter>
        </CardBody>
      </Card>
    )
  }
}

export default SimilarProduct
